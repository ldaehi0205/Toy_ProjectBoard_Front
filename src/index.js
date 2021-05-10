import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./page/login";
import join from "./page/join";
import main from "./page/main";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={join} />
        <Route exact path="/main" component={main} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
