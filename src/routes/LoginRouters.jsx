import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginScreen from "../pages/LoginScreen";
import AppRouters from "./AppRouters";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const LoginRouters = () => {
  const { log } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRouter path="/login" auth={log} component={LoginScreen} />
        <PrivateRouter path="/" auth={log} component={AppRouters} />
      </Switch>
    </Router>
  );
};

export default LoginRouters;
