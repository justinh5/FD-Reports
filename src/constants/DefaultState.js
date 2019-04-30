
export const defaultState = {
  timeData: {
    aeFood: {
      retrieved: false,
      data: {
        labels: [],
        counts: []
      }
    },
    recallsFood: {
      retrieved: false,
      data: []
    },
    aeDrugs: {
      retrieved: false,
      data: []
    },
    recallsDrugs: {
      retrieved: false,
      data: []
    },
    aeDevices: {
      retrieved: false,
      data: []
    },
    recallsDevices: {
      retrieved: false,
      data: []
    }
  },
  selectedTab: null,
  recordList: {
    productTypes: {
      retrieved: false,
      data: []
    },
    reportedOutcomes: {
      retrieved: false,
      data: []
    },
    reportedReactions: {
      retrieved: false,
      data: []
    },
    drugClasses: {
      retrieved: false,
      data: []
    },
    drugIndications: {
      retrieved: false,
      data: []
    },
    drugReactions: {
      retrieved: false,
      data: []
    },
    devices: {
      retrieved: false,
      data: []
    },
    deviceAge: {
      retrieved: false,
      data: []
    },
    manufacturerState: {
      retrieved: false,
      data: []
    }
  }
};
