import { LeaderboardCreateNestedManyWithoutAndiesInput } from "./LeaderboardCreateNestedManyWithoutAndiesInput";
import { RaceCreateNestedManyWithoutAndiesInput } from "./RaceCreateNestedManyWithoutAndiesInput";
import { ScoreCreateNestedManyWithoutAndiesInput } from "./ScoreCreateNestedManyWithoutAndiesInput";

export type AndyCreateInput = {
  email?: string | null;
  leaderboards?: LeaderboardCreateNestedManyWithoutAndiesInput;
  races?: RaceCreateNestedManyWithoutAndiesInput;
  scores?: ScoreCreateNestedManyWithoutAndiesInput;
  username?: string | null;
};
