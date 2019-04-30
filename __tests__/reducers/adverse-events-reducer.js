import recordListReducer from './../../src/reducers/record-list-reducer';
import constants from './../../src/constants';
import * as actions from './../../src/actions';
const { defaultState, c } = constants;

describe('recordListReducer', () => {

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
    expect(recordListReducer({}, { type: null })).toEqual({});
  });

  test('update state on receive record', () => {
    const action = actions.receiveRecord('productType', sampleRecordData);
    const newObject = {
      retrieved: true,
      data: sampleRecordData
    };
    expect(recordListReducer(defaultState.recordList, action)[action.recordId])
    .toEqual(newObject);
  });

  test('update adverse event state on receive time data', () => {
    const action = actions.receiveAETimeData('aeFood', sampleLabels, sampleCountsA);
    const newObject = {
      retrieved: true,
      data: {
        labels: ['2004', '2005', '2006'],
        counts: [50, 60, 70]
      }
    };
    expect(timeDataReducer(defaultState.timeData, action)[action.id])
    .toEqual(newObject);
  });


});
