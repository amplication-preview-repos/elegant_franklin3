import { Andy } from "../andy/Andy";
import { Race } from "../race/Race";

export type Leaderboard = {
  createdAt: Date;
  id: string;
  player?: Andy | null;
  position: number | null;
  race?: Race | null;
  updatedAt: Date;
};
