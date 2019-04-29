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

export const receiveRecord = (recordId, data) => ({
  type: c.RECEIVE_RECORD,
  recordId,
  data
});

export function fetchRecords(record) {
  return function (dispatch) {
    return fetch('https://api.fda.gov/' + record.url).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        const results = json.results;
        dispatch(receiveRecord(record.id, results));
      } else {
        console.log('No data found for this type of record!');
      }
    });
  };
}
