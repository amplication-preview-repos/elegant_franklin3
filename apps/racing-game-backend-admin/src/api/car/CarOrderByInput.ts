import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  brand?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  model?: SortOrder;
  speed?: SortOrder;
  updatedAt?: SortOrder;
};
