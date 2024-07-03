import { Player } from "../player/Player";
import { Race } from "../race/Race";

export type Leaderboard = {
  createdAt: Date;
  id: string;
  player?: Player | null;
  position: number | null;
  race?: Race | null;
  updatedAt: Date;
};
