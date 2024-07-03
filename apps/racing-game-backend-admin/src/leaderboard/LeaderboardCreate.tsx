import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { AndyTitle } from "../andy/AndyTitle";
import { RaceTitle } from "../race/RaceTitle";

export const LeaderboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="player.id" reference="Andy" label="Player">
          <SelectInput optionText={AndyTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="position" source="position" />
        <ReferenceInput source="race.id" reference="Race" label="Race">
          <SelectInput optionText={RaceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
