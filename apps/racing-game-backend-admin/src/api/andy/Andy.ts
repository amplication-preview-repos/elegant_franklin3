import { Leaderboard } from "../leaderboard/Leaderboard";
import { Race } from "../race/Race";
import { Score } from "../score/Score";

export type Andy = {
  createdAt: Date;
  email: string | null;
  id: string;
  leaderboards?: Array<Leaderboard>;
  races?: Array<Race>;
  scores?: Array<Score>;
  updatedAt: Date;
  username: string | null;
};
