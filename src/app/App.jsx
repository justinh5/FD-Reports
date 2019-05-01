import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import AEFood from '../adverseEvents/AEFood';
import AEDrug from '../adverseEvents/AEDrug';
import AEDevice from '../adverseEvents/AEDevice';
import RecallsFood from '../recalls/RecallsFood';
import Error404 from './Error404';

function App() {

  return (
    <div>
      <div className = "container">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/AdverseEvents/Food' component={AEFood} />
          <Route exact path='/AdverseEvents/Drug' component={AEDrug} />
          <Route exact path='/AdverseEvents/Device' component={AEDevice} />
          <Route exact path='/Recalls/Food' component={RecallsFood} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}


export default hot(App);
