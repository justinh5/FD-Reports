import constants from './../constants';
const { defaultState, c } = constants;

export default (state = defaultState.recordList, action) => {

  switch (action.type) {

    case c.RECEIVE_RECORDS:
      return state;

    default:
      return state;
  }
};
