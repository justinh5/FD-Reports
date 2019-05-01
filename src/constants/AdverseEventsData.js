
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
    dateEndpoint: 'drug/event.json?search=receivedate:[20040101+TO+20190426]&count=receivedate',
    tabs: [
      {
        id: 'drugClasses',
        tabIndex: 0,
        type: 'drugs',
        label: 'Drug Classes',
        endpoint: 'drug/event.json?search=receivedate:[20040101+TO+20190426]&count=patient.drug.openfda.pharm_class_epc.exact'
      },
      {
        id: 'drugIndications',
        tabIndex: 1,
        type: 'drugs',
        label: 'Drug Indications',
        endpoint: 'drug/event.json?search=receivedate:[20040101+TO+20190426]&count=patient.drug.drugindication.exact'
      },
      {
        id: 'drugReactions',
        tabIndex: 2,
        type: 'drugs',
        label: 'Drug Reactions',
        endpoint: 'drug/event.json?search=receivedate:[20040101+TO+20190426]&count=patient.reaction.reactionmeddrapt.exact'
      }
    ]
  },
  devices: {

  }
};
