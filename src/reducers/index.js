import adverseEventsReducer from './adverse-events-reducer';
import recallsReducer from './recalls-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  adverseEvents: adverseEventsReducer,
  recalls: recallsReducer
});

export default rootReducer;
