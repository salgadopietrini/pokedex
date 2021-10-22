import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Container from "./components/Container/Container";
import TypesInfo from "./components/TypesInfo/TypesInfo";

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path={"/"} component={Container}></Route>
          <Route exact path={"/typesInfo"} component={TypesInfo}></Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
