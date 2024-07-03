import { Race as TRace } from "../api/race/Race";

export const RACE_TITLE_FIELD = "track";

export const RaceTitle = (record: TRace): string => {
  return record.track?.toString() || String(record.id);
};
