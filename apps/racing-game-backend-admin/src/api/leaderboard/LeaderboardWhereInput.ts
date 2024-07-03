import { StringFilter } from "../../util/StringFilter";
import { AndyWhereUniqueInput } from "../andy/AndyWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  player?: AndyWhereUniqueInput;
  position?: IntNullableFilter;
  race?: RaceWhereUniqueInput;
};
