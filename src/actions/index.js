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

export const receiveTimeData = (id, labels, counts) => ({
  type: c.RECEIVE_TIME_DATA,
  id,
  labels,
  counts
});

export const receiveRecord = (recordId, data) => ({
  type: c.RECEIVE_RECORD,
  recordId,
  data
});

export function fetchRecords(record) {
  return function (dispatch) {
    return fetch('https://api.fda.gov/' + record.endpoint).then(
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

export function fetchTimeData(id, endpoint) {
  return function (dispatch) {
    return fetch('https://api.fda.gov/' + endpoint).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        let labels = [], counts = [];
        json.results.forEach(function(item) {
           let year = item.time.slice(0, 4);
           let count = item.count;
           if(!labels.includes(year)){
             labels.push(year);
             counts.push(count);
           }
           else {
             let i = labels.indexOf(year);
             counts[i] += count;
           }
        });
        dispatch(receiveTimeData(id, labels, counts));
      } else {
        console.log('No data found for this type of record!');
      }
    });
  };
}
