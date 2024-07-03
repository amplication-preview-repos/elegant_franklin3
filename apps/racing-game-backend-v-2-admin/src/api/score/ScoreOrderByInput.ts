import { SortOrder } from "../../util/SortOrder";

export type ScoreOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  raceId?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
