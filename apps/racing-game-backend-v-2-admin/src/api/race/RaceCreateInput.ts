import { LeaderboardCreateNestedManyWithoutRacesInput } from "./LeaderboardCreateNestedManyWithoutRacesInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { ScoreCreateNestedManyWithoutRacesInput } from "./ScoreCreateNestedManyWithoutRacesInput";

export type RaceCreateInput = {
  date?: Date | null;
  leaderboards?: LeaderboardCreateNestedManyWithoutRacesInput;
  player?: PlayerWhereUniqueInput | null;
  scores?: ScoreCreateNestedManyWithoutRacesInput;
  track?: string | null;
};
