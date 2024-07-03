import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "brand";

export const CarTitle = (record: TCar): string => {
  return record.brand?.toString() || String(record.id);
};
