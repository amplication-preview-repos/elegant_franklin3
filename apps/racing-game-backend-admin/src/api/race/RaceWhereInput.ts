import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaderboardListRelationFilter } from "../leaderboard/LeaderboardListRelationFilter";
import { AndyWhereUniqueInput } from "../andy/AndyWhereUniqueInput";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RaceWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  leaderboards?: LeaderboardListRelationFilter;
  player?: AndyWhereUniqueInput;
  scores?: ScoreListRelationFilter;
  track?: StringNullableFilter;
};
