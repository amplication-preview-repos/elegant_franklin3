import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
  position?: IntNullableFilter;
  race?: RaceWhereUniqueInput;
};
