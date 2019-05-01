import constants from './../constants';
const { defaultState, c } = constants;

export const selectTab = (tabId, category) => ({
  type: c.SELECT_TAB,
  tabId,
  category
});

export const resetTab = () => ({
  type: c.RESET_TAB,
  tabId: defaultState.selectedTab
});

export const receiveAETimeData = (category, labels, counts) => ({
  type: c.RECEIVE_AE_TIME_DATA,
  category,
  labels,
  counts
});

export const receiveRecallTimeData = (category, labels, countsA, countsB) => ({
  type: c.RECEIVE_RECALL_TIME_DATA,
  category,
  labels,
  countsA,
  countsB
});

export const receiveRecord = (recordId, category, data) => ({
  type: c.RECEIVE_RECORD,
  recordId,
  category,
  data
});

export function fetchRecords(record, category) {
  return function (dispatch) {
    return fetch('https://api.fda.gov/' + record.endpoint).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        const results = json.results;
        dispatch(receiveRecord(record.id, category, results));
      } else {
        console.log('No data found for this type of record!');
      }
    });
  };
}

export function fetchAETimeData(category, endpoint) {
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
        dispatch(receiveAETimeData(category, labels, counts));
      } else {
        console.log('No data found for this type of record!');
      }
    });
  };
}

export function fetchRecallTimeData(category, endpointA, endpointB) {
  return function (dispatch) {
    return fetch('https://api.fda.gov/' + endpointA).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        fetchRecallSetB(category, json.results, endpointB, dispatch);
      } else {
        console.log('No data found for this type of record!');
      }
    });
  };
}

export function fetchRecallSetB(category, resultsSetA, endpointB, dispatch) {
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
        dispatch(receiveRecallTimeData(category, labels, countsA, countsB));
      } else {
        console.log("No data found for this type of record!")
      }
  });
}
