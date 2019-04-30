import constants from './../constants';
const { defaultState, c } = constants;

export default (state = defaultState.adverseEvents, action) => {

  let time;
  let newTimes;
  let record;
  let newRecord;
  let newState;

  switch (action.type) {

    case c.RECEIVE_RECALL_TIME_DATA:
      time = state[action.id];
      newTimes = Object.assign({}, time,  {
        retrieved: true,
        data: {
          labels: action.labels,
          countsA: action.countsA,
          countsB: action.countsB
        }
      });
      newState = Object.assign({}, state, {
        [action.id]: newTimes
      });
      return newState;

    default:
      return state;
  }
};
