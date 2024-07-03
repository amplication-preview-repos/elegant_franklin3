import { LeaderboardCreateNestedManyWithoutPlayersInput } from "./LeaderboardCreateNestedManyWithoutPlayersInput";
import { RaceCreateNestedManyWithoutPlayersInput } from "./RaceCreateNestedManyWithoutPlayersInput";
import { ScoreCreateNestedManyWithoutPlayersInput } from "./ScoreCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  email?: string | null;
  leaderboards?: LeaderboardCreateNestedManyWithoutPlayersInput;
  races?: RaceCreateNestedManyWithoutPlayersInput;
  scores?: ScoreCreateNestedManyWithoutPlayersInput;
  username?: string | null;
};
