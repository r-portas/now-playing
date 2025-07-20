import { fetchJson } from "./lib/fetch";
import { z } from "zod";
import type { Activity } from "./types/activity";

const STEAM_API_KEY = Bun.env.STEAM_API_KEY;
const STEAM_USER_ID = Bun.env.STEAM_USER_ID;

if (!STEAM_API_KEY || !STEAM_USER_ID) {
  throw new Error(
    "Please set STEAM_API_KEY and STEAM_USER_ID as environment variables in the .env file."
  );
}

const API_URL = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_USER_ID}`;

const SteamGameSchema = z.object({
  appid: z.number(),
  name: z.string(),
  playtime_forever: z.number(),
  playtime_2weeks: z.number().optional(),
});

const SteamResponseSchema = z.object({
  response: z.object({
    games: z.array(SteamGameSchema).optional(),
  }),
});

async function fetchRecentActivity(): Promise<Activity[]> {
  const data = await fetchJson(API_URL);
  const parsed = SteamResponseSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      "Steam API response validation failed: " + parsed.error.message
    );
  }
  const games = parsed.data.response.games ?? [];
  return games.map((g) => ({
    type: "game",
    name: g.name,
    timestamp: new Date(),
    // TODO: Not sure if I can get this
    // timestamp: new Date(g.rtime_last_played * 1000), // Steam returns seconds since epoch
    metadata: {
      appid: g.appid,
      playtimeForever: g.playtime_forever * 60,
      playtime2Weeks: (g.playtime_2weeks || 0) * 60,
    },
  }));
}

const activity = await fetchRecentActivity();
console.log(`Fetched ${activity.length} recent Steam activities`);
await Bun.write("./data/steam.json", JSON.stringify(activity, null, 2));
console.log("Steam activity fetched and saved to ./data/steam.json");
