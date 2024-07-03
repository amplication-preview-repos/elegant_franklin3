import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ANDY_TITLE_FIELD } from "../andy/AndyTitle";
import { RACE_TITLE_FIELD } from "../race/RaceTitle";

export const LeaderboardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Player" source="andy.id" reference="Andy">
          <TextField source={ANDY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="position" source="position" />
        <ReferenceField label="Race" source="race.id" reference="Race">
          <TextField source={RACE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
