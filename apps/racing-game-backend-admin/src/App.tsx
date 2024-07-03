import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CarList } from "./car/CarList";
import { CarCreate } from "./car/CarCreate";
import { CarEdit } from "./car/CarEdit";
import { CarShow } from "./car/CarShow";
import { AndyList } from "./andy/AndyList";
import { AndyCreate } from "./andy/AndyCreate";
import { AndyEdit } from "./andy/AndyEdit";
import { AndyShow } from "./andy/AndyShow";
import { RaceList } from "./race/RaceList";
import { RaceCreate } from "./race/RaceCreate";
import { RaceEdit } from "./race/RaceEdit";
import { RaceShow } from "./race/RaceShow";
import { ScoreList } from "./score/ScoreList";
import { ScoreCreate } from "./score/ScoreCreate";
import { ScoreEdit } from "./score/ScoreEdit";
import { ScoreShow } from "./score/ScoreShow";
import { LeaderboardList } from "./leaderboard/LeaderboardList";
import { LeaderboardCreate } from "./leaderboard/LeaderboardCreate";
import { LeaderboardEdit } from "./leaderboard/LeaderboardEdit";
import { LeaderboardShow } from "./leaderboard/LeaderboardShow";
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
        title={"RacingGameBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Car"
          list={CarList}
          edit={CarEdit}
          create={CarCreate}
          show={CarShow}
        />
        <Resource
          name="Andy"
          list={AndyList}
          edit={AndyEdit}
          create={AndyCreate}
          show={AndyShow}
        />
        <Resource
          name="Race"
          list={RaceList}
          edit={RaceEdit}
          create={RaceCreate}
          show={RaceShow}
        />
        <Resource
          name="Score"
          list={ScoreList}
          edit={ScoreEdit}
          create={ScoreCreate}
          show={ScoreShow}
        />
        <Resource
          name="Leaderboard"
          list={LeaderboardList}
          edit={LeaderboardEdit}
          create={LeaderboardCreate}
          show={LeaderboardShow}
        />
      </Admin>
    </div>
  );
};

export default App;
