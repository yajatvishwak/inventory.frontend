import React from "react";
import "./styles/tailwind.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Cookies from "js-cookie";

import Login from "./app/Login/Login";

import { AuthRoute, UnauthRoute } from "react-router-auth";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Signup from "./app/Signup/Signup";
import Dashboard from "./app/Dashboard/ Dashboard";

import Stocking from "./app/Stocking/Stocking";

function App() {
  return (
    <Router>
      <Switch>
        <UnauthRoute exact path="/login" component={Login} />
        <UnauthRoute exact path="/signup" component={Signup} />
        <UnauthRoute exact path="/dashboard/stocking" component={Stocking} />
        <AuthRoute
          exact
          path="/dashboard/home"
          component={Dashboard}
          redirectTo="/login"
          authenticated={Cookies.get("authed")}
        />
      </Switch>
    </Router>
  );
}

export default App;
