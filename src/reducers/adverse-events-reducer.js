import constants from './../constants';
const { defaultState, c } = constants;

export default (state = defaultState.adverseEvents, action) => {

  let time;
  let newTimes;
  let record;
  let newRecord;
  let newState;

  switch (action.type) {

    case c.RECEIVE_AE_TIME_DATA:
      time = state[action.id];
      newTimes = Object.assign({}, time,  {
        retrieved: true,
        data: {
          labels: action.labels,
          counts: action.counts
        }
      });
      newState = Object.assign({}, state, {
        [action.id]: newTimes
      });
      return newState;

    case c.SELECT_TAB:
      return action.tabId;

    case c.RESET_TAB:
      return action.tabId;

    case c.RECEIVE_RECORD:
      record = state[action.recordId];
      newRecord = Object.assign({}, record,  {
        retrieved: true,
        data: action.data
      });
      newState = Object.assign({}, state, {
        [action.recordId]: newRecord
      });
      return newState;

    default:
      return state;
  }
};
