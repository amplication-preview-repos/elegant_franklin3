import { LeaderboardUpdateManyWithoutRacesInput } from "./LeaderboardUpdateManyWithoutRacesInput";
import { AndyWhereUniqueInput } from "../andy/AndyWhereUniqueInput";
import { ScoreUpdateManyWithoutRacesInput } from "./ScoreUpdateManyWithoutRacesInput";

export type RaceUpdateInput = {
  date?: Date | null;
  leaderboards?: LeaderboardUpdateManyWithoutRacesInput;
  player?: AndyWhereUniqueInput | null;
  scores?: ScoreUpdateManyWithoutRacesInput;
  track?: string | null;
};
