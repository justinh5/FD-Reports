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


});
