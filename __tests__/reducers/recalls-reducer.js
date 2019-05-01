import recallReducer from './../../src/reducers/recalls-reducer';
import constants from './../../src/constants';
import * as actions from './../../src/actions';
const { defaultState, c } = constants;

describe('Recall Reducer', () => {

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
    expect(recallReducer({}, { type: null })).toEqual({});
  });

  test('update state on receive time data', () => {
    const action = actions.receiveRecallTimeData('food', sampleLabels, sampleCountsA, sampleCountsB);
    const newObject = {
      retrieved: true,
      data: {
        labels: ['2004', '2005', '2006'],
        countsA: [50, 60, 70],
        countsB: [80, 90, 100]
      }
    };
    expect(recallReducer(defaultState.recalls, action).food.timeData)
    .toEqual(newObject);
  });


});
