import * as types from './ActionTypes';
import { defaultState } from './DefaultState';
import { tabData } from './TabData';
import { timeData } from './TimeData';

export default {
  defaultState: defaultState,
  c: types,
  tabs: tabData,
  timeData: timeData
};
