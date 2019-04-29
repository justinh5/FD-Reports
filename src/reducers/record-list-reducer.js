import constants from './../constants';
const { defaultState, c } = constants;

export default (state = defaultState.recordList, action) => {

  let record;
  let newRecord;
  let newState;

  switch (action.type) {

    case c.RECEIVE_RECORD:
      record = state[action.recordId];
      newRecord = Object.assign({}, record,  {
        retrieved: true,
        data: action.data
      });
      newState = Object.assign({}, state, {
        [action.recordId]: newRecord
      });
      return newState;

    default:
      return state;
  }
};
