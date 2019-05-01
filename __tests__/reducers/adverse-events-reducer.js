import adverseEventReducer from './../../src/reducers/adverse-events-reducer';
import constants from './../../src/constants';
import * as actions from './../../src/actions';
const { defaultState, c } = constants;

describe('Adverse Event Reducer', () => {

  const sampleRecordData = [
    {
      label : 'Hospitalization',
      value : 4800
    }
  ];

  const sampleLabels = ['2004', '2005', '2006'];
  const sampleCountsA = [50, 60, 70];
  const sampleCountsB = [80, 90, 100];

  test('Should return default state if no action type is recognized', () => {
    expect(adverseEventReducer({}, { type: null })).toEqual({});
  });

  test('update state on receive record', () => {
    const action = actions.receiveRecord('productType', 'food', sampleRecordData);
    const newObject = {
      retrieved: true,
      data: sampleRecordData
    };
    expect(adverseEventReducer(defaultState.adverseEvents, action).food.recordList[action.recordId])
    .toEqual(newObject);
  });

  test('update state on receive time data', () => {
    const action = actions.receiveAETimeData('food', sampleLabels, sampleCountsA);
    const newObject = {
      retrieved: true,
      data: {
        labels: ['2004', '2005', '2006'],
        counts: [50, 60, 70]
      }
    };
    expect(adverseEventReducer(defaultState.adverseEvents, action).food.timeData)
    .toEqual(newObject);
  });


});
