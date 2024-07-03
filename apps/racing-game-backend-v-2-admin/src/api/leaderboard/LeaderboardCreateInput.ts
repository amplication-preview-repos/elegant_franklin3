import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";

export type LeaderboardCreateInput = {
  player?: PlayerWhereUniqueInput | null;
  position?: number | null;
  race?: RaceWhereUniqueInput | null;
};
