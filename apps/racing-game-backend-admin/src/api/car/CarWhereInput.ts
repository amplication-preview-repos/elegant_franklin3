import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CarWhereInput = {
  brand?: StringNullableFilter;
  id?: StringFilter;
  model?: StringNullableFilter;
  speed?: FloatNullableFilter;
};
