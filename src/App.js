import React, { useState } from "react";
import "./styles/tailwind.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import Login from "./app/Login/Login";

import { AuthRoute, UnauthRoute } from "react-router-auth";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Signup from "./app/Signup/Signup";
import Dashboard from "./app/Dashboard/Dashboard";
import Stocking from "./app/Stocking/Stocking";
import Billing from "./app/Billing/Billing";
// eslint-disable-next-line
function App() {
  const [auth, setauth] = useState(false);

  const onLogin = () => {
    setauth(true);
  };

  return (
    <Router>
      <Switch>
        <UnauthRoute
          exact
          path="/login"
          component={() => <Login onLogin={onLogin} isLogged={auth} />}
        />
        <UnauthRoute exact path="/signup" component={Signup} />

        <AuthRoute
          path="/dashboard/home"
          component={() => <Dashboard isLogged={auth} />}
          redirectTo="/login"
          authenticated={true}
        />
        <AuthRoute
          path="/dashboard/stocking"
          component={() => <Stocking isLogged={auth} />}
          redirectTo="/login"
          authenticated={true}
        />
        <AuthRoute
          path="/dashboard/billing"
          component={() => <Billing isLogged={auth} />}
          redirectTo="/login"
          authenticated={true}
        />
      </Switch>
    </Router>
  );
}

export default App;
