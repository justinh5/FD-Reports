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

export const receiveAETimeData = (id, labels, counts) => ({
  type: c.RECEIVE_AE_TIME_DATA,
  id,
  labels,
  counts
});

export const receiveRecallTimeData = (id, labels, countsA, countsB) => ({
  type: c.RECEIVE_RECALL_TIME_DATA,
  id,
  labels,
  countsA,
  countsB
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

export function fetchAETimeData(id, endpoint) {
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
        dispatch(receiveAETimeData(id, labels, counts));
      } else {
        console.log('No data found for this type of record!');
      }
    });
  };
}

export function fetchRecallTimeData(id, endpointA, endpointB) {
  return function (dispatch) {
    return fetch('https://api.fda.gov/' + endpointA).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        fetchRecallSetB(id, json.results, endpointB, dispatch);
      } else {
        console.log('No data found for this type of record!');
      }
    });
  };
}

export function fetchRecallSetB(id, resultsSetA, endpointB, dispatch) {
  return fetch('https://api.fda.gov/' + endpointB).then(
    response => response.json(),
    error => console.log("An error occured.", error)).then(function(json) {
      if (json.results.length > 0) {
        let labels = [], countsA = [], countsB = [];
        // Parse labels and counts for set A
        resultsSetA.forEach(function(item) {
          let year = item.time.slice(0, 4);
          let count = item.count;
          if(!labels.includes(year)){
           labels.push(year);
           countsA.push(count);
           countsB.push(0);
          }
          else {
           let i = labels.indexOf(year);
           countsA[i] += count;
          }
        });

        // Parse counts from set B
        json.results.forEach(function(item) {
          let year = item.time.slice(0, 4);
          let count = item.count;
          let i = labels.indexOf(year);
          countsB[i] += count;
        });
        dispatch(receiveRecallTimeData(id, labels, countsA, countsB));
      } else {
        console.log("No data found for this type of record!")
      }
  });
}
