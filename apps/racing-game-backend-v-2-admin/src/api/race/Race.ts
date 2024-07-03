import { Leaderboard } from "../leaderboard/Leaderboard";
import { Player } from "../player/Player";
import { Score } from "../score/Score";

export type Race = {
  createdAt: Date;
  date: Date | null;
  id: string;
  leaderboards?: Array<Leaderboard>;
  player?: Player | null;
  scores?: Array<Score>;
  track: string | null;
  updatedAt: Date;
};
