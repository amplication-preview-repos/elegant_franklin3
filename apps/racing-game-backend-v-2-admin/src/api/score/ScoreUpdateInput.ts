import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";

export type ScoreUpdateInput = {
  player?: PlayerWhereUniqueInput | null;
  race?: RaceWhereUniqueInput | null;
  value?: number | null;
};
