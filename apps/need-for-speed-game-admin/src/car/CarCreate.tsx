import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="SSC Tuatara" source="sscTuatara" />
        <TextInput
          label="Koenigsegg Jesko Absolut"
          source="koenigseggJeskoAbsolut"
        />
        <NumberInput step={1} label="speed" source="speed" />
        <TextInput
          label="Bugatti Veyron Super Sport"
          source="bugattiVeyronSuperSport"
        />
        <TextInput label="Rimac C_Two" source="rimacCTwo" />
        <TextInput label="Koenigsegg Gemera" source="koenigseggGemera" />
        <TextInput label="Pininfarina Battista" source="pininfarinaBattista" />
        <TextInput label="Porsche 918 Spyder" source="porsche_918Spyder" />
        <TextInput label="Aston Martin One-77" source="astonMartinOne_77" />
        <TextInput
          label="Bugatti Chiron Super Sport 300+"
          source="bugattiChironSuperSport_300"
        />
        <TextInput label="Hennessey Venom F5" source="hennesseyVenomF5" />
      </SimpleForm>
    </Create>
  );
};
