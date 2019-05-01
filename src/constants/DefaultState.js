
export const defaultState = {
  adverseEvents: {
    food: {
      timeData: {
        retrieved: false,
        data: {
          labels: [],
          counts: []
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
        }
      }
    },
    drugs: {

    },
    devices: {

    }
  },
  recalls: {
    food: {
      timeData: {
        retrieved: false,
        data: {
          labels: [],
          countsA: [],
          countsB: []
        }
      },
      statusData: {
        retrieved: false,
        ongoing: 0,
        completed: 0,
        terminated: 0
      },
      classes: {
        retrieved: false,
        class1: 0,
        class2: 0,
        class3: 0,
        notClassed: 0
      }
    },
    drugs: {

    },
    devices: {

    }
  }
};
