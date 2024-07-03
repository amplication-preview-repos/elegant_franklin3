import { SortOrder } from "../../util/SortOrder";

export type LeaderboardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  position?: SortOrder;
  raceId?: SortOrder;
  updatedAt?: SortOrder;
};
