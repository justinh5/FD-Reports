
export const timeData = {
  adverseEvents: {
    food: {
      category: 'food',
      endpoint: 'food/event.json?count=date_created'
    },
    drugs: {
      category: 'drugs',
    },
    devices: {
      category: 'devices',
    }
  },
  recalls: {
    food: {
      category: 'food',
      setA: 'Report Date',
      setB: 'Termination Date',
      endpointA: 'food/enforcement.json?count=report_date',
      endpointB: 'food/enforcement.json?count=termination_date'
    },
    drugs: {
      category: 'drugs',
    },
    devices: {
      category: 'devices',
    }
  }
};
