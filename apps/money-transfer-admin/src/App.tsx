import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TransferList } from "./transfer/TransferList";
import { TransferCreate } from "./transfer/TransferCreate";
import { TransferEdit } from "./transfer/TransferEdit";
import { TransferShow } from "./transfer/TransferShow";
import { BeneficiaryList } from "./beneficiary/BeneficiaryList";
import { BeneficiaryCreate } from "./beneficiary/BeneficiaryCreate";
import { BeneficiaryEdit } from "./beneficiary/BeneficiaryEdit";
import { BeneficiaryShow } from "./beneficiary/BeneficiaryShow";
import { TransactionFeeList } from "./transactionFee/TransactionFeeList";
import { TransactionFeeCreate } from "./transactionFee/TransactionFeeCreate";
import { TransactionFeeEdit } from "./transactionFee/TransactionFeeEdit";
import { TransactionFeeShow } from "./transactionFee/TransactionFeeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"MoneyTransfer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Transfer"
          list={TransferList}
          edit={TransferEdit}
          create={TransferCreate}
          show={TransferShow}
        />
        <Resource
          name="Beneficiary"
          list={BeneficiaryList}
          edit={BeneficiaryEdit}
          create={BeneficiaryCreate}
          show={BeneficiaryShow}
        />
        <Resource
          name="TransactionFee"
          list={TransactionFeeList}
          edit={TransactionFeeEdit}
          create={TransactionFeeCreate}
          show={TransactionFeeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
