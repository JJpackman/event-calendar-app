import * as t from '../actions/actionTypes';
import dateManager from '../utils/dateManager';

const initialState = {
  date: new Date()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.MOOVE_TO_NEXT_MONTH:
      return {
        date: dateManager.moveMonths(state.date, 1)
      };
    case t.MOOVE_TO_PREV_MONTH:
      return {
        date: dateManager.moveMonths(state.date, -1)
      };
    default:
      return state;
  }
};
