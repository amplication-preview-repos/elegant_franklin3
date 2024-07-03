import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaderboardListRelationFilter } from "../leaderboard/LeaderboardListRelationFilter";
import { RaceListRelationFilter } from "../race/RaceListRelationFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";

export type PlayerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  leaderboards?: LeaderboardListRelationFilter;
  races?: RaceListRelationFilter;
  scores?: ScoreListRelationFilter;
  username?: StringNullableFilter;
};
