import { Beneficiary as TBeneficiary } from "../api/beneficiary/Beneficiary";

export const BENEFICIARY_TITLE_FIELD = "id";

export const BeneficiaryTitle = (record: TBeneficiary): string => {
  return record.id?.toString() || String(record.id);
};
