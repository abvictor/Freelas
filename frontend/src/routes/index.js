import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import GetStarted from "../pages/GetStarted";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

const Routes = () => (
  <Switch>
    <Route path="/" component={SignIn} exact />
    <Route path="/register" component={Register} />
    <Route path="/getStarted" component={GetStarted} />
  </Switch>
);

export default Routes;
