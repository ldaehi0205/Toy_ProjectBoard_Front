import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./page/login";
import join from "./page/join";
import main from "./page/main";
import write from "./page/write";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={join} />
        <Route exact path="/main" component={main} />
        <Route exact path="/write" component={write} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
