import { AndyWhereUniqueInput } from "../andy/AndyWhereUniqueInput";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";

export type LeaderboardUpdateInput = {
  player?: AndyWhereUniqueInput | null;
  position?: number | null;
  race?: RaceWhereUniqueInput | null;
};
