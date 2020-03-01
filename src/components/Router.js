import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import NamePicker from "./NamePicker";
import App from "./App";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={NamePicker} />
      <Route path="/:name" component={App} />
    </Switch>
  </HashRouter>
);

export default Router;
