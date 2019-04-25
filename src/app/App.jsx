import { hot } from "react-hot-loader/root";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../landing/Landing";
import AEFood from "../adverseEvents/AEFood";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Error404 from "./Error404";

function App() {

  return (
    <div>
      <div className = "container">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/AdverseEvents/Food' component={AEFood} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default hot(App);
