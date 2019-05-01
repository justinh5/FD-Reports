
export const recallData = {
  food: {
    setA: 'Report Date',
    setB: 'Termination Date',
    endpointA: 'food/enforcement.json?count=report_date',
    endpointB: 'food/enforcement.json?count=termination_date',
    statusEndpoint: 'food/enforcement.json?count=status',
    classEndpoint: 'food/enforcement.json?count=classification.exact'
  },
  drug: {
    setA: 'Report Date',
    setB: 'Termination Date',
    endpointA: 'drug/enforcement.json?count=report_date',
    endpointB: 'drug/enforcement.json?count=termination_date',
    statusEndpoint: 'drug/enforcement.json?count=status.exact',
    classEndpoint: 'drug/enforcement.json?count=classification.exact'
  },
  device: {
    setA: 'Report Date',
    setB: 'Termination Date',
    endpointA: 'device/enforcement.json?count=report_date',
    endpointB: 'device/enforcement.json?count=termination_date',
    statusEndpoint: 'device/enforcement.json?count=status.exact',
    classEndpoint: 'device/enforcement.json?count=classification.exact'
  }
};
