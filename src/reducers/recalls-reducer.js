import constants from './../constants';
const { defaultState, c } = constants;

export default (state = defaultState.recalls, action) => {

  let time;
  let newTimes;
  let record;
  let newRecord;
  let newState;

  switch (action.type) {

    case c.RECEIVE_RECALL_TIME_DATA:
      // time = state[action.category];
      // newTimes = Object.assign({}, time,  {
      //   retrieved: true,
      //   data: {
      //     labels: action.labels,
      //     countsA: action.countsA,
      //     countsB: action.countsB
      //   }
      // });
      // newState = Object.assign({}, state, {
      //   [action.category]: newTimes
      // });
      return newState;

    default:
      return state;
  }
};