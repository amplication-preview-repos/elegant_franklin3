import { Player } from "../player/Player";
import { Race } from "../race/Race";

export type Score = {
  createdAt: Date;
  id: string;
  player?: Player | null;
  race?: Race | null;
  updatedAt: Date;
  value: number | null;
};
