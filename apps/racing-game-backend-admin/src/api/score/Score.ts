import { Andy } from "../andy/Andy";
import { Race } from "../race/Race";

export type Score = {
  createdAt: Date;
  id: string;
  player?: Andy | null;
  race?: Race | null;
  updatedAt: Date;
  value: number | null;
};
