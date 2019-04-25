import { hot } from "react-hot-loader/root";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../landing/Landing";
import AEfood from "../adverseEvents/AEfood";
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
          <Route exact path='/AdverseEvents/Food' component={AEfood} />
          <Route exact path='/page1' component={Page1} />
          <Route exact path='/page2' component={Page2} />
          <Route exact path='/page3' component={Page3} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default hot(App);
