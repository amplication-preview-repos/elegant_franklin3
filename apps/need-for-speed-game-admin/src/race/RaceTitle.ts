import { Race as TRace } from "../api/race/Race";

export const RACE_TITLE_FIELD = "id";

export const RaceTitle = (record: TRace): string => {
  return record.id?.toString() || String(record.id);
};
