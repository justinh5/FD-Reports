import timeDataReducer from './time-data-reducer';
import selectedTabReducer from './selected-tab-reducer';
import recordListReducer from './record-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  timeData: timeDataReducer,
  selectedTab: selectedTabReducer,
  recordList: recordListReducer
});

export default rootReducer;
