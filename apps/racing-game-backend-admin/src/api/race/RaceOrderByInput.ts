import { SortOrder } from "../../util/SortOrder";

export type RaceOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  track?: SortOrder;
  updatedAt?: SortOrder;
};
