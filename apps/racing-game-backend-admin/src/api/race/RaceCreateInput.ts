import { LeaderboardCreateNestedManyWithoutRacesInput } from "./LeaderboardCreateNestedManyWithoutRacesInput";
import { AndyWhereUniqueInput } from "../andy/AndyWhereUniqueInput";
import { ScoreCreateNestedManyWithoutRacesInput } from "./ScoreCreateNestedManyWithoutRacesInput";

export type RaceCreateInput = {
  date?: Date | null;
  leaderboards?: LeaderboardCreateNestedManyWithoutRacesInput;
  player?: AndyWhereUniqueInput | null;
  scores?: ScoreCreateNestedManyWithoutRacesInput;
  track?: string | null;
};
