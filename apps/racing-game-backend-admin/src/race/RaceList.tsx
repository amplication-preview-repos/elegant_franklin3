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

export const RaceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Races"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Player" source="andy.id" reference="Andy">
          <TextField source={ANDY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="track" source="track" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
