import timeDataReducer from './../../src/reducers/time-data-reducer';
import constants from './../../src/constants';
import * as actions from './../../src/actions';
const { defaultState, c } = constants;

describe('timeDataReducer', () => {

  const sampleLabels = ['2004', '2005', '2006'];
  const sampleCountsA = [50, 60, 70];
  const sampleCountsB = [80, 90, 100];

  test('Should return default state if no action type is recognized', () => {
    expect(timeDataReducer({}, { type: null })).toEqual({});
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

  test('update recall state on receive time data', () => {
    const action = actions.receiveRecallTimeData('recallsFood', sampleLabels, sampleCountsA, sampleCountsB);
    const newObject = {
      retrieved: true,
      data: {
        labels: ['2004', '2005', '2006'],
        countsA: [50, 60, 70],
        countsB: [80, 90, 100]
      }
    };
    expect(timeDataReducer(defaultState.timeData, action)[action.id])
    .toEqual(newObject);
  });


});
