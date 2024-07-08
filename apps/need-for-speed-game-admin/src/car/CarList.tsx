import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CarList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"cars"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="SSC Tuatara" source="sscTuatara" />
        <TextField
          label="Koenigsegg Jesko Absolut"
          source="koenigseggJeskoAbsolut"
        />
        <TextField label="speed" source="speed" />
        <TextField
          label="Bugatti Veyron Super Sport"
          source="bugattiVeyronSuperSport"
        />
        <TextField label="Rimac C_Two" source="rimacCTwo" />
        <TextField label="Koenigsegg Gemera" source="koenigseggGemera" />
        <TextField label="Pininfarina Battista" source="pininfarinaBattista" />
        <TextField label="Porsche 918 Spyder" source="porsche_918Spyder" />
        <TextField label="Aston Martin One-77" source="astonMartinOne_77" />
        <TextField
          label="Bugatti Chiron Super Sport 300+"
          source="bugattiChironSuperSport_300"
        />
        <TextField label="Hennessey Venom F5" source="hennesseyVenomF5" />
      </Datagrid>
    </List>
  );
};
