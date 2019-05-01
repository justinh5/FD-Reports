import constants from './../constants';
const { defaultState, c } = constants;

export default (state = defaultState.recalls, action) => {

  let section;
  let newSection;
  let time;
  let newTimes;
  let newRecord;
  let newState;

  switch (action.type) {

    case c.RECEIVE_RECALL_TIME_DATA:
      section = state[action.category];
      time = state[action.category].timeData;
      newTimes = Object.assign({}, time,  {
        retrieved: true,
        data: {
          labels: action.labels,
          countsA: action.countsA,
          countsB: action.countsB
        }
      });
      newSection = Object.assign({}, section, {
        timeData: newTimes
      });
      newState = Object.assign({}, state, {
        [action.category]: newSection
      });
      return newState;

    default:
      return state;
  }
};
