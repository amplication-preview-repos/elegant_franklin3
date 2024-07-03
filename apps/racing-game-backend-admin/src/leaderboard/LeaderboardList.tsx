import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ANDY_TITLE_FIELD } from "../andy/AndyTitle";
import { RACE_TITLE_FIELD } from "../race/RaceTitle";

export const LeaderboardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Leaderboards"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
