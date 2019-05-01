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

  test('update state on receive status', () => {
    const action = actions.receiveStatus('food', 5, 6, 7, 8);
    const newObject = {
      retrieved: true,
      ongoing: 5,
      completed: 6,
      terminated: 7,
      pending: 8
    };
    expect(recallReducer(defaultState.recalls, action).food.statusData)
    .toEqual(newObject);
  });

  test('update state on receive class data', () => {
    const action = actions.receiveClasses('food', 5, 6, 7, 8);
    const newObject = {
      retrieved: true,
      class1: 5,
      class2: 6,
      class3: 7,
      notClassed: 8
    };
    expect(recallReducer(defaultState.recalls, action).food.classes)
    .toEqual(newObject);
  });


});
