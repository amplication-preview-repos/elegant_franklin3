import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RaceList } from "./race/RaceList";
import { RaceCreate } from "./race/RaceCreate";
import { RaceEdit } from "./race/RaceEdit";
import { RaceShow } from "./race/RaceShow";
import { MapList } from "./map/MapList";
import { MapCreate } from "./map/MapCreate";
import { MapEdit } from "./map/MapEdit";
import { MapShow } from "./map/MapShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CarList } from "./car/CarList";
import { CarCreate } from "./car/CarCreate";
import { CarEdit } from "./car/CarEdit";
import { CarShow } from "./car/CarShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"NeedForSpeedGame"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Race"
          list={RaceList}
          edit={RaceEdit}
          create={RaceCreate}
          show={RaceShow}
        />
        <Resource
          name="Map"
          list={MapList}
          edit={MapEdit}
          create={MapCreate}
          show={MapShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Car"
          list={CarList}
          edit={CarEdit}
          create={CarCreate}
          show={CarShow}
        />
      </Admin>
    </div>
  );
};

export default App;
