import constants from './../constants';
const { defaultState, c } = constants;

export default (state = defaultState.timeData, action) => {

  let time;
  let newTimes;
  let newState;

  switch (action.type) {

    case c.RECEIVE_TIME_DATA:
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

    default:
      return state;
  }
};
