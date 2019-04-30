import timeDataReducer from './../../src/reducers/time-data-reducer';
import constants from './../../src/constants';
import * as actions from './../../src/actions';
const { defaultState, c } = constants;

describe('timeDataReducer', () => {

  const sampleLabels = ['2004', '2005', '2006'];
  const sampleCounts = [50, 60, 70];

  test('Should return default state if no action type is recognized', () => {
    expect(timeDataReducer({}, { type: null })).toEqual({});
  });

  test('update state on receive time data', () => {
    const action = actions.receiveTimeData('aeFood', sampleLabels, sampleCounts);
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
