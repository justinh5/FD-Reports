import recordListReducer from './../../src/reducers/record-list-reducer';
import constants from './../../src/constants';
const { c } = constants;

describe('recordListReducer', () => {

  let action;
  const sampleRecordData = [
    {
      label : 'Hospitalization',
      value : 4800
    }
  ];

  test('Should return default state if no action type is recognized', () => {
    expect(recordListReducer({}, { type: null })).toEqual({});
  });


});
