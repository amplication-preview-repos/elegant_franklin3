import { Andy as TAndy } from "../api/andy/Andy";

export const ANDY_TITLE_FIELD = "username";

export const AndyTitle = (record: TAndy): string => {
  return record.username?.toString() || String(record.id);
};
