import { LeaderboardUpdateManyWithoutAndiesInput } from "./LeaderboardUpdateManyWithoutAndiesInput";
import { RaceUpdateManyWithoutAndiesInput } from "./RaceUpdateManyWithoutAndiesInput";
import { ScoreUpdateManyWithoutAndiesInput } from "./ScoreUpdateManyWithoutAndiesInput";

export type AndyUpdateInput = {
  email?: string | null;
  leaderboards?: LeaderboardUpdateManyWithoutAndiesInput;
  races?: RaceUpdateManyWithoutAndiesInput;
  scores?: ScoreUpdateManyWithoutAndiesInput;
  username?: string | null;
};
