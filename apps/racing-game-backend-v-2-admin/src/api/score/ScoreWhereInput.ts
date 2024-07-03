import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ScoreWhereInput = {
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
  race?: RaceWhereUniqueInput;
  value?: IntNullableFilter;
};
