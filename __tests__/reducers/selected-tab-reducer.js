import selectedTabReducer from './../../src/reducers/selected-tab-reducer';
import constants from './../../src/constants';
const { defaultState, c } = constants;

describe('selectedTabReducer', () => {
  const initialState = Object.assign({}, defaultState, {
    selectedTab: 1
  });

  test('Should return default state if no action type is recognized', () => {
    expect(selectedTabReducer({}, { type: null })).toEqual({});
  });

  test('Should record which tab has been selected by user', () => {
    expect(selectedTabReducer({}, { type: c.SELECT_TAB, tabId: 2 })).toEqual(2);
  });

});
