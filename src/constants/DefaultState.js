
export const defaultState = {
  adverseEvents: {
    food: {
      timeData: {
        retrieved: false,
        labels: [],
        counts: []
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
    drug: {
      timeData: {
        retrieved: false,
        labels: [],
        counts: []
      },
      seriousness: {
        retrieved: false,
        counts: []
      },
      sources: {
        retrieved: false,
        counts: []
      },
      selectedTab: null,
      recordList: {
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
      }
    },
    device: {
      timeData: {
        retrieved: false,
        data: {
          labels: [],
          counts: []
        }
      },
      selectedTab: null,
      recordList: {
        devices: {
          retrieved: false,
          data: []
        },
        typesOfEvents: {
          retrieved: false,
          data: []
        },
        manufacturerState: {
          retrieved: false,
          data: []
        }
      }
    }
  },
  recalls: {
    food: {
      timeData: {
        retrieved: false,
        labels: [],
        countsA: [],
        countsB: []
      },
      statusData: {
        retrieved: false,
        ongoing: 0,
        completed: 0,
        terminated: 0,
        pending: 0
      },
      classes: {
        retrieved: false,
        class1: 0,
        class2: 0,
        class3: 0,
        notClassed: 0
      }
    },
    drug: {
      timeData: {
        retrieved: false,
        labels: [],
        countsA: [],
        countsB: []
      },
      statusData: {
        retrieved: false,
        ongoing: 0,
        completed: 0,
        terminated: 0,
        pending: 0
      },
      classes: {
        retrieved: false,
        class1: 0,
        class2: 0,
        class3: 0,
        notClassed: 0
      }
    },
    device: {
      timeData: {
        retrieved: false,
        labels: [],
        countsA: [],
        countsB: []
      },
      statusData: {
        retrieved: false,
        ongoing: 0,
        completed: 0,
        terminated: 0,
        pending: 0
      },
      classes: {
        retrieved: false,
        class1: 0,
        class2: 0,
        class3: 0,
        notClassed: 0
      }
    }
  }
};
