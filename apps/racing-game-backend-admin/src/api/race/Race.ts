import { Leaderboard } from "../leaderboard/Leaderboard";
import { Andy } from "../andy/Andy";
import { Score } from "../score/Score";

export type Race = {
  createdAt: Date;
  date: Date | null;
  id: string;
  leaderboards?: Array<Leaderboard>;
  player?: Andy | null;
  scores?: Array<Score>;
  track: string | null;
  updatedAt: Date;
};
