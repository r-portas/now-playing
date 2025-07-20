# now-playing

## Overview

A collection of scripts for scraping activity data from various sources, including:

- Game activity from [Steam](https://store.steampowered.com/)
- Music activity from [Spotify](https://www.spotify.com/)
- TV Shows and Movies from [Plex](https://www.plex.tv/)

I mostly built this to capture what I've been doing lately.

## Project Structure

- `src/` — All source code
- `src/*.ts` — Individual scripts (run directly)
- `src/lib/` — Reusable libraries and utilities
- `package.json` — Project metadata and dependencies
- `bun.lockb` — Bun lock file

Test files should be placed alongside scripts with a `.test.ts` suffix.

## Getting Started

### Install Dependencies

```bash
bun install
```

### Run Tests

```bash
bun test
```

## Scripts

### Steam Activity

Fetches your recent play history from Steam and exports it as a JSON file (`data/steam.json`).

You need to set the following environment variables in a `.env` file or your shell:

- `STEAM_API_KEY`: Your Steam Web API key
  - Visit [Steam API Key registration](https://steamcommunity.com/dev/apikey) and log in.
  - Follow the instructions to generate your key.
- `STEAM_ID`: Your SteamID64 (numeric Steam account ID)
  - Go to your Steam profile and copy the number from the URL (e.g. `https://steamcommunity.com/profiles/12345678901234567`).
  - Or use a lookup tool like [steamid.io](https://steamid.io/).

#### Usage

Run the script with Bun:

```bash
bun run src/steam-activity.ts
```

This will create or update `data/steam.json` with your recent Steam activity.
