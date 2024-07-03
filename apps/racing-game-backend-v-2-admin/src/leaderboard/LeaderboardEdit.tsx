import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { PlayerTitle } from "../player/PlayerTitle";
import { RaceTitle } from "../race/RaceTitle";

export const LeaderboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="player.id" reference="Player" label="Player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="position" source="position" />
        <ReferenceInput source="race.id" reference="Race" label="Race">
          <SelectInput optionText={RaceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
