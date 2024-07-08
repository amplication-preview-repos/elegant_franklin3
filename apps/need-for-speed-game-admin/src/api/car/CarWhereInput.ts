import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CarWhereInput = {
  id?: StringFilter;
  sscTuatara?: StringNullableFilter;
  koenigseggJeskoAbsolut?: StringNullableFilter;
  speed?: IntNullableFilter;
  bugattiVeyronSuperSport?: StringNullableFilter;
  rimacCTwo?: StringNullableFilter;
  koenigseggGemera?: StringNullableFilter;
  pininfarinaBattista?: StringNullableFilter;
  porsche_918Spyder?: StringNullableFilter;
  astonMartinOne_77?: StringNullableFilter;
  bugattiChironSuperSport_300?: StringNullableFilter;
  hennesseyVenomF5?: StringNullableFilter;
};
