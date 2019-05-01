
export const timeData = {
  adverseEvents: {
    food: {
      endpoint: 'food/event.json?count=date_created'
    },
    drugs: {
      endpoint: 'food/event.json?count=date_created'
    },
    devices: {
      endpoint: 'food/event.json?count=date_created'
    }
  },
  recalls: {
    food: {
      setA: 'Report Date',
      setB: 'Termination Date',
      endpointA: 'food/enforcement.json?count=report_date',
      endpointB: 'food/enforcement.json?count=termination_date'
    },
    drugs: {
      setA: 'Report Date',
      setB: 'Termination Date',
      endpointA: 'food/enforcement.json?count=report_date',
      endpointB: 'food/enforcement.json?count=termination_date'
    },
    devices: {
      setA: 'Report Date',
      setB: 'Termination Date',
      endpointA: 'food/enforcement.json?count=report_date',
      endpointB: 'food/enforcement.json?count=termination_date'
    }
  }
};
