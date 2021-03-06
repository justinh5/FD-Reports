import constants from './../constants';
const { defaultState, c } = constants;

export default (state = defaultState.adverseEvents, action) => {

  let section;
  let newSection;
  let recordList;
  let newRecord;
  let newState;

  switch (action.type) {

    case c.RECEIVE_AE_TIME_DATA:
      section = state[action.category];
      let time = state[action.category].timeData;
      let newTimes = Object.assign({}, time,  {
        retrieved: true,
        labels: action.labels,
        counts: action.counts
      });
      newSection = Object.assign({}, section, {
        timeData: newTimes
      });
      newState = Object.assign({}, state, {
        [action.category]: newSection
      });
      return newState;

    case c.RECEIVE_AE_SERIOUSNESS:
      section = state[action.category];
      let serious = state[action.category].seriousness;
      let newSerious = Object.assign({}, serious,  {
        retrieved: true,
        counts: action.counts
      });
      newSection = Object.assign({}, section, {
        seriousness: newSerious
      });
      newState = Object.assign({}, state, {
        [action.category]: newSection
      });
      return newState;

    case c.RECEIVE_AE_SOURCES:
      section = state[action.category];
      let sources = state[action.category].sources;
      let newSources = Object.assign({}, sources,  {
        retrieved: true,
        counts: action.counts
      });
      newSection = Object.assign({}, section, {
        sources: newSources
      });
      newState = Object.assign({}, state, {
        [action.category]: newSection
      });
      return newState;

    case c.SELECT_TAB:
      section = state[action.category];
      newSection = Object.assign({}, section,  {
        selectedTab: action.tabId
      });
      newState = Object.assign({}, state, {
        [action.category]: newSection
      });
      return newState;

    case c.RECEIVE_RECORD:
      section = state[action.category];
      recordList = state[action.category].recordList;
      newRecord = Object.assign({}, recordList,  {
        [action.recordId]: {
          retrieved: true,
          data: action.data
        }
      });
      newSection = Object.assign({}, section, {
        recordList: newRecord
      });
      newState = Object.assign({}, state, {
        [action.category]: newSection
      });
      return newState;

    default:
      return state;
  }
};
