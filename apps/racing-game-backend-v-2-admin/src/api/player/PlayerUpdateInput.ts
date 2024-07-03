import { LeaderboardUpdateManyWithoutPlayersInput } from "./LeaderboardUpdateManyWithoutPlayersInput";
import { RaceUpdateManyWithoutPlayersInput } from "./RaceUpdateManyWithoutPlayersInput";
import { ScoreUpdateManyWithoutPlayersInput } from "./ScoreUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  email?: string | null;
  leaderboards?: LeaderboardUpdateManyWithoutPlayersInput;
  races?: RaceUpdateManyWithoutPlayersInput;
  scores?: ScoreUpdateManyWithoutPlayersInput;
  username?: string | null;
};
