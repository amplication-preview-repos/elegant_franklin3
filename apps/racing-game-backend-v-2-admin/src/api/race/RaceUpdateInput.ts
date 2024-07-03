import { LeaderboardUpdateManyWithoutRacesInput } from "./LeaderboardUpdateManyWithoutRacesInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { ScoreUpdateManyWithoutRacesInput } from "./ScoreUpdateManyWithoutRacesInput";

export type RaceUpdateInput = {
  date?: Date | null;
  leaderboards?: LeaderboardUpdateManyWithoutRacesInput;
  player?: PlayerWhereUniqueInput | null;
  scores?: ScoreUpdateManyWithoutRacesInput;
  track?: string | null;
};
