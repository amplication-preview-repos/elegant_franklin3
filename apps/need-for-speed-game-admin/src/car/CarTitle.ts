import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "sscTuatara";

export const CarTitle = (record: TCar): string => {
  return record.sscTuatara?.toString() || String(record.id);
};
