
export const adverseEventsData = {
  food: {
    dateEndpoint: 'food/event.json?count=date_created',
    tabs: [
      {
        id: 'productTypes',
        tabIndex: 0,
        type: 'food',
        label: 'Product Types',
        endpoint: 'food/event.json?count=products.industry_name.exact'
      },
      {
        id: 'reportedOutcomes',
        tabIndex: 1,
        type: 'food',
        label: 'Reported Outcomes',
        endpoint: 'food/event.json?count=outcomes.exact'
      },
      {
        id: 'reportedReactions',
        tabIndex: 2,
        type: 'food',
        label: 'Reported Reactions',
        endpoint: 'food/event.json?count=consumer.age'
      }
    ]
  },
  drugs: {

  },
  devices: {

  }
};
