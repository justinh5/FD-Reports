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

export const receiveStatus = (category, ongoing, completed, terminated, pending) => ({
  type: c.RECEIVE_RECALL_STATUS,
  category,
  ongoing,
  completed,
  terminated,
  pending
});

export const receiveClasses = (category, class1, class2, class3, na) => ({
  type: c.RECEIVE_RECALL_CLASSES,
  category,
  class1,
  class2,
  class3,
  na
});

export const receiveSeriousness = (category, counts) => ({
  type: c.RECEIVE_AE_SERIOUSNESS,
  category,
  counts
});

export const receiveSources = (category, counts) => ({
  type: c.RECEIVE_AE_SOURCES,
  category,
  counts
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

export function fetchStatusData(category, endpoint) {
  return function (dispatch) {
    return fetch('https://api.fda.gov/' + endpoint).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        const results = json.results;
        let ongoing = 0, completed = 0, terminated = 0, pending = 0;
        results.forEach(item => {
          switch(item.term.toLowerCase()) {
            case 'ongoing':
              ongoing += item.count;
              break;
            case 'completed':
              completed += item.count;
              break;
            case 'terminated':
              terminated += item.count;
              break;
            case 'pending':
              pending += item.count;
              break;
          }
        });
        dispatch(receiveStatus(category, ongoing, completed, terminated, pending));
      } else {
        console.log('No data found for this type of record!');
      }
    });
  };
}

export function fetchClassData(category, endpoint) {
  return function (dispatch) {
    return fetch('https://api.fda.gov/' + endpoint).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        const results = json.results;
        let class1 = 0, class2 = 0, class3 = 0, na = 0;
        results.forEach(item => {
          switch(item.term) {
            case 'Class I':
              class1 += item.count;
              break;
            case 'Class II':
              class2 += item.count;
              break;
            case 'Class III':
              class3 += item.count;
              break;
            case 'Not Yet Classified':
              na += item.count;
              break;
          }
        });
        dispatch(receiveClasses(category, class1, class2, class3, na));
      } else {
        console.log('No data found for this type of record!');
      }
    });
  };
}

export function fetchSeriousness(category, endpoint) {
  return function (dispatch) {
    return fetch('https://api.fda.gov/' + endpoint).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        let counts = [0, 0];
        counts[0] = json.results[0].count;
        counts[1] = json.results[1].count;
        dispatch(receiveSeriousness(category, counts));
      } else {
        console.log('No data found for this type of record!');
      }
    });
  };
}

export function fetchSources(category, endpoint) {
  return function (dispatch) {
    return fetch('https://api.fda.gov/' + endpoint).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        let counts = [];
        for(let i=1; i<6; ++i) {
          json.results.forEach(item => {
            if(item.term === i) {
              counts.push(item.count);
            }
          });
        }
        dispatch(receiveSources(category, counts));
      } else {
        console.log('No data found for this type of record!');
      }
    });
  };
}

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
