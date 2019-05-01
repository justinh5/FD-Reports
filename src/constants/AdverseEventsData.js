
export const adverseEventsData = {
  food: {
    dateEndpoint: 'food/event.json?count=date_created',
    tabs: [
      {
        id: 'productTypes',
        label: 'Product Types',
        description: 'The FDA industry name associated with the product.',
        endpoint: 'food/event.json?count=products.industry_name.exact'
      },
      {
        id: 'reportedOutcomes',
        label: 'Reported Outcomes',
        description: 'The outcome or consequence of the adverse event.',
        endpoint: 'food/event.json?count=outcomes.exact'
      },
      {
        id: 'reportedReactions',
        label: 'Reported Reactions',
        description: 'The reported age of the consumer at the time of the adverse event report.',
        endpoint: 'food/event.json?count=consumer.age'
      }
    ]
  },
  drug: {
    dateEndpoint: 'drug/event.json?search=receivedate:[20040101+TO+20190426]&count=receivedate',
    seriousEndpoint: 'drug/event.json?search=receivedate:[20040101+TO+20190426]&count=serious',
    sourcesEndpoint: 'drug/event.json?search=receivedate:[20040101+TO+20190426]&count=primarysource.qualification',
    tabs: [
      {
        id: 'drugClasses',
        label: 'Drug Classes',
        description: 'Established pharmacologic class associated with an approved indication of an active moiety (generic drug) that the FDA has determined to be scientifically valid and clinically meaningful.',
        endpoint: 'drug/event.json?search=receivedate:[20040101+TO+20190426]&count=patient.drug.openfda.pharm_class_epc.exact'
      },
      {
        id: 'drugIndications',
        label: 'Drug Indications',
        description: 'Indication for the drug’s use.',
        endpoint: 'drug/event.json?search=receivedate:[20040101+TO+20190426]&count=patient.drug.drugindication.exact'
      },
      {
        id: 'drugReactions',
        label: 'Drug Reactions',
        description: 'Patient reaction, as a MedDRA term. Note that these terms are encoded in British English. For instance, diarrhea is spelled diarrohea. MedDRA is a standardized medical terminology.',
        endpoint: 'drug/event.json?search=receivedate:[20040101+TO+20190426]&count=patient.reaction.reactionmeddrapt.exact'
      }
    ]
  },
  device: {
    dateEndpoint: 'device/event.json?count=date_received',
    tabs: [
      {
        id: 'devices',
        label: 'Devices',
        description: 'The generic or common name of the suspect medical device or a generally descriptive name (e.g. urological catheter, heart pacemaker, patient restraint, etc.).',
        endpoint: 'device/event.json?count=device.generic_name.exact'
      },
      {
        id: 'typesOfEvents',
        label: 'Types of Events',
        description: 'Outcomes associated with the adverse event.',
        endpoint: 'device/event.json?count=event_type.exact'
      },
      {
        id: 'manufacturerState',
        label: 'Manufacturer State',
        description: 'Device manufacturer address state.',
        endpoint: 'device/event.json?count=manufacturer_g1_state'
      }
    ]
  }
};
