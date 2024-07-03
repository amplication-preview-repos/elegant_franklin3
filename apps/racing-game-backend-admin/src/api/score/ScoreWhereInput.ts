import { StringFilter } from "../../util/StringFilter";
import { AndyWhereUniqueInput } from "../andy/AndyWhereUniqueInput";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ScoreWhereInput = {
  id?: StringFilter;
  player?: AndyWhereUniqueInput;
  race?: RaceWhereUniqueInput;
  value?: IntNullableFilter;
};
