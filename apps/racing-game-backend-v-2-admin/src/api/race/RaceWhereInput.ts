import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaderboardListRelationFilter } from "../leaderboard/LeaderboardListRelationFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RaceWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  leaderboards?: LeaderboardListRelationFilter;
  player?: PlayerWhereUniqueInput;
  scores?: ScoreListRelationFilter;
  track?: StringNullableFilter;
};
