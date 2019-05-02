import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/shared/header.scss';
import '../styles/shared/reportPage.scss';
import '../styles/adverseEvents/records.scss';
import '../styles/adverseEvents/seriousness.scss';
import '../styles/adverseEvents/source.scss';
import '../styles/recalls/classifications.scss';
import '../styles/recalls/status.scss';
import Landing from '../landing/Landing';
import AEFood from '../adverseEvents/AEFood';
import AEDrug from '../adverseEvents/AEDrug';
import AEDevice from '../adverseEvents/AEDevice';
import RecallsFood from '../recalls/RecallsFood';
import RecallsDrug from '../recalls/RecallsDrug';
import RecallsDevice from '../recalls/RecallsDevice';
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
          <Route exact path='/Recalls/Drug' component={RecallsDrug} />
          <Route exact path='/Recalls/Device' component={RecallsDevice} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}


export default hot(App);
