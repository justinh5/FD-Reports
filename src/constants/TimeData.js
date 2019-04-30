
export const timeData = {
  adverseEvents: {
    food: {
      id: 'aeFood',
      endpoint: 'food/event.json?count=date_created'
    },
    drugs: {
      id: 'aeDrugs',
    },
    devices: {
      id: 'aeDevices',
    }
  },
  recalls: {
    food: {
      id: 'recallsFood',
      setA: 'Report Date',
      setB: 'Termination Date',
      endpointA: 'food/enforcement.json?count=report_date',
      endpointB: 'food/enforcement.json?count=termination_date'
    },
    drugs: {
      id: 'aeFood',
    },
    devices: {
      id: 'aeFood',
    }
  }
};
