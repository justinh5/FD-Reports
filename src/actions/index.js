import constants from './../constants';
const { defaultState, c } = constants;

export const selectTab = (tabId) => ({
  type: c.SELECT_TAB,
  tabId
});

export const resetTab = () => ({
  type: c.RESET_TAB,
  tabId: defaultState.selectedTab
});
