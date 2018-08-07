import * as t from './actionTypes';
import * as dateActions from './date';

describe('date action creators', () => {
  it('moveToNextMonth() should return action with type MOOVE_TO_NEXT_MONTH', () => {
    const expectedAction = {
      type: t.MOOVE_TO_NEXT_MONTH
    };

    expect(dateActions.moveToNextMonth()).toEqual(expectedAction);
  });

  it('moveToPrevMonth() should return action with type MOOVE_TO_PREV_MONTH', () => {
    const expectedAction = {
      type: t.MOOVE_TO_PREV_MONTH
    };

    expect(dateActions.moveToPrevMonth()).toEqual(expectedAction);
  });
});
