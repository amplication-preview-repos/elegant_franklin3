import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";

export type LeaderboardUpdateInput = {
  player?: PlayerWhereUniqueInput | null;
  position?: number | null;
  race?: RaceWhereUniqueInput | null;
};
