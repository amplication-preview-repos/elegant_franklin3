import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";

export type ScoreCreateInput = {
  player?: PlayerWhereUniqueInput | null;
  race?: RaceWhereUniqueInput | null;
  value?: number | null;
};
