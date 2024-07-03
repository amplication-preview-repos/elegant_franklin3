import { AndyWhereUniqueInput } from "../andy/AndyWhereUniqueInput";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";

export type ScoreCreateInput = {
  player?: AndyWhereUniqueInput | null;
  race?: RaceWhereUniqueInput | null;
  value?: number | null;
};
