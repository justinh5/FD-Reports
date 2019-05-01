import constants from './../constants';
const { defaultState, c } = constants;

export default (state = defaultState.recalls, action) => {

  let section;
  let newSection;
  let newState;

  switch (action.type) {

    case c.RECEIVE_RECALL_TIME_DATA:
      section = state[action.category];
      let time = state[action.category].timeData;
      let newTimes = Object.assign({}, time,  {
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

    case c.RECEIVE_RECALL_STATUS:
      section = state[action.category];
      let status = state[action.category].statusData;
      let newStatus = Object.assign({}, status,  {
        retrieved: true,
        ongoing: action.ongoing,
        completed: action.completed,
        terminated: action.terminated,
        pending: action.pending
      });
      newSection = Object.assign({}, section, {
        statusData: newStatus
      });
      newState = Object.assign({}, state, {
        [action.category]: newSection
      });
      return newState;

    case c.RECEIVE_RECALL_CLASSES:
      section = state[action.category];
      let classes = state[action.category].classes;
      let newClass = Object.assign({}, status,  {
        retrieved: true,
        class1: action.class1,
        class2: action.class2,
        class3: action.class3,
        notClasses: action.na
      });
      newSection = Object.assign({}, section, {
        classes: newClass
      });
      newState = Object.assign({}, state, {
        [action.category]: newSection
      });
      return newState;

    default:
      return state;
  }
};
