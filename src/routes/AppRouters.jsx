import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import CharacterScreen from "../pages/CharacterScreen";
import MansScreen from "../pages/MansScreen";
import SearchScreen from "../pages/SearchScreen";
import WomenScreen from "../pages/WomenScreen";

const AppRouters = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <div className="container">
          <Route exact path="/mans" component={MansScreen} />
          <Route exact path="/women" component={WomenScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Route exact path="/character/:id" component={CharacterScreen} />

          <Redirect to="/mans" />
        </div>
      </Switch>
    </>
  );
};

export default AppRouters;
