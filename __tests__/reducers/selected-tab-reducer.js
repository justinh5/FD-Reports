import selectedTabReducer from './../../src/reducers/selected-tab-reducer';
import constants from './../../src/constants';
import * as actions from "./../../src/actions";
const { defaultState, c } = constants;

describe('selectedTabReducer', () => {
  const initialState = Object.assign({}, defaultState, {
    selectedTab: null
  });

  test('Should return default state if no action type is recognized', () => {
    expect(selectedTabReducer({}, { type: null })).toEqual({});
  });

});
