import selectedTabReducer from './selected-tab-reducer';
import recordListReducer from './record-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedTab: selectedTabReducer,
  recordList: recordListReducer
});

export default rootReducer;
