import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { LeaderboardTitle } from "../leaderboard/LeaderboardTitle";
import { AndyTitle } from "../andy/AndyTitle";
import { ScoreTitle } from "../score/ScoreTitle";

export const RaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <ReferenceArrayInput
          source="leaderboards"
          reference="Leaderboard"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaderboardTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="player.id" reference="Andy" label="Player">
          <SelectInput optionText={AndyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="scores"
          reference="Score"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScoreTitle} />
        </ReferenceArrayInput>
        <TextInput label="track" source="track" />
      </SimpleForm>
    </Create>
  );
};
