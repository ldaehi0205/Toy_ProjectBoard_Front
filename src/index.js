import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./page/login";
import join from "./page/join";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={join} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
