import reducer from './date';
import * as actionTypes from '../actions/actionTypes';

describe('date reducer', () => {
  it('should not affect state', () => {
    const initialState = {
      date: new Date(2018, 3, 14)
    };

    const nonExistentAction = {
      type: 'NON_EXISTENT'
    };

    expect(reducer(initialState, nonExistentAction)).toEqual(initialState);
  });

  it('should handle MOOVE_TO_NEXT_MONTH', () => {
    const initialState = {
      date: new Date(2018, 8, 4)
    };

    const mooveToNextMonthAction = {
      type: actionTypes.MOOVE_TO_NEXT_MONTH
    };

    expect(reducer(initialState, mooveToNextMonthAction)).toEqual({
      date: new Date(2018, 9, 4)
    });
  });

  it('should handle MOOVE_TO_PREV_MONTH', () => {
    const initialState = {
      date: new Date(2018, 8, 4)
    };

    const mooveToPrevMonthAction = {
      type: actionTypes.MOOVE_TO_PREV_MONTH
    };

    expect(reducer(initialState, mooveToPrevMonthAction)).toEqual({
      date: new Date(2018, 7, 4)
    });
  });
});
