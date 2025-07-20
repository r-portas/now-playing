/**
 * Represents an activity entry
 */
export interface Activity {
  /**
   * The type of the activity
   */
  type: "game" | "music" | "tv-show" | "movie";

  /**
   * The name of the game, song, album, TV show or movie
   */
  name: string;

  /**
   * The timestamp of when the activity occurred
   *
   * @remarks
   * Probably need to refine this more,
   * e.g. split it out to start and end times, duration, etc.
   */
  timestamp: Date;

  /**
   * Any additional metadata
   */
  metadata: Record<string, any>;
}
