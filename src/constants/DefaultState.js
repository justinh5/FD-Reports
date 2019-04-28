
export const defaultState = {
  selectedTab: 0,
  recordList: {
    food: {
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
      }
    },
    drugs: {
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
      }
    },
    devices: {
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
  }
};
