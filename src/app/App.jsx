import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import AEFood from '../adverseEvents/AEFood';
import RecallsFood from '../recalls/RecallsFood';
import Error404 from './Error404';

function App() {

  return (
    <div>
      <div className = "container">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/AdverseEvents/Food' component={AEFood} />
          <Route exact path='/Recalls/Food' component={RecallsFood} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}


export default hot(App);
