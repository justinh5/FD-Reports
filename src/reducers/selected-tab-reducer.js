import constants from './../constants';
const { defaultState, c } = constants;

export default (state = defaultState.selectedTab, action) => {
  switch (action.type) {
    case c.SELECT_TAB:
      return action.tabId;
    case c.RESET_TAB:
      return action.tabId;
    default:
      return state;
  }
};
