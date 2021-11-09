import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Dashboard from "../pages/Dashboard";
import GetStarted from "../pages/GetStarted";

import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

import DevProfile from "../pages/DevProfile";

const Routes = () => (
  <Switch>
    <Route path="/" component={SignIn} exact />
    <Route path="/register" component={Register} />

    <Route path="/getStarted" component={GetStarted} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/devProfile" component={DevProfile} isPrivate />
  </Switch>
);

export default Routes;
