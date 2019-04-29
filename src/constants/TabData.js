
export const tabData = {
  food: [
    {
      id: 'productTypes',
      tabIndex: 0,
      type: 'food',
      label: 'Product Types',
      url: 'food/event.json?count=products.industry_name.exact'
    },
    {
      id: 'reportedOutcomes',
      tabIndex: 1,
      type: 'food',
      label: 'Reported Outcomes',
      url: 'food/event.json?count=outcomes.exact'
    },
    {
      id: 'reportedReactions',
      tabIndex: 2,
      type: 'food',
      label: 'Reported Reactions',
      url: 'food/event.json?count=consumer.age'
    }
  ],
  drugs: [],
  devices: []

};
