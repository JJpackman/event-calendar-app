import * as t from './actionTypes';
import * as dateActions from './date';

describe('actions', () => {
  describe('date actions', () => {
    it('moveToNextMonth() should move to next month', () => {
      const expectedAction = {
        type: t.MOOVE_TO_NEXT_MONTH
      };

      expect(dateActions.moveToNextMonth()).toEqual(expectedAction);
    });

    it('moveToPrevMonth() should move to prev month', () => {
      const expectedAction = {
        type: t.MOOVE_TO_PREV_MONTH
      };

      expect(dateActions.moveToPrevMonth()).toEqual(expectedAction);
    });
  });
});
