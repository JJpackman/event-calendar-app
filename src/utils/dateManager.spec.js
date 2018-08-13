import dataManager from './dateManager';

describe('date manager', () => {
  describe('month manipulation functionality', () => {
    it('should handle mooveMonth() to return new date instance', () => {
      const date = new Date(2018, 5, 8);

      expect(dataManager.moveMonths(date, 1)).not.toBe(date);
    });

    it('should handle mooveMonth() to add month if \'number\' parameter is positive value', () => {
      const date = new Date(2018, 2, 8);

      expect(dataManager.moveMonths(date, 1)).toEqual(new Date(2018, 3, 8));
    });

    it('should handle mooveMonth() to subtract month if \'number\' parameter is negative value', () => {
      const date = new Date(2018, 2, 8);

      expect(dataManager.moveMonths(date, -1)).toEqual(new Date(2018, 1, 8));
    });

    it('should handle mooveMonth() to add one month', () => {
      const date = new Date(2018, 4, 8);

      expect(dataManager.moveMonths(date, 1)).toEqual(new Date(2018, 5, 8));
    });

    it('should handle mooveMonths() to add arbitrary number of month', () => {
      const date = new Date(2018, 3, 15);

      expect(dataManager.moveMonths(date, 3)).toEqual(new Date(2018, 6, 15));
      expect(dataManager.moveMonths(date, 6)).toEqual(new Date(2018, 9, 15));
      expect(dataManager.moveMonths(date, 2)).toEqual(new Date(2018, 5, 15));
    });

    it('should handle mooveMonths() to hanlde transition to next years during months\' addition', () => {
      const date = new Date(2018, 3, 25);

      expect(dataManager.moveMonths(date, 9)).toEqual(new Date(2019, 0, 25));
      expect(dataManager.moveMonths(date, 23)).toEqual(new Date(2020, 2, 25));
    });

    it('should handle mooveMonth() to subtract one month', () => {
      const date = new Date(2018, 5, 18);

      expect(dataManager.moveMonths(date, -1)).toEqual(new Date(2018, 4, 18));
    });

    it('should handle mooveMonths() to subtract arbitrary number of month', () => {
      const date = new Date(2018, 3, 15);

      expect(dataManager.moveMonths(date, -3)).toEqual(new Date(2018, 0, 15));
      expect(dataManager.moveMonths(date, -2)).toEqual(new Date(2018, 1, 15));
    });

    it('should handle mooveMonths() to hanlde transition to previous years during months\' subtraction', () => {
      const date = new Date(2018, 3, 28);

      expect(dataManager.moveMonths(date, -7)).toEqual(new Date(2017, 8, 28));
      expect(dataManager.moveMonths(date, -4)).toEqual(new Date(2017, 11, 28));
      expect(dataManager.moveMonths(date, -34)).toEqual(new Date(2015, 5, 28));
    });
  });

  describe('helper date functionality', () => {
    it('should handle clone() to return new date instance with the same date and time', () => {
      const date = new Date(2018, 4, 24);
      const dateClone = dataManager.clone(date);

      expect(date).not.toBe(dateClone);
      expect(date).toEqual(dateClone);
    });

    it('should handle endOfMonth() to return new date instance that day is last day of month', () => {
      const date = new Date(2018, 4, 12);
      const endOfMonthDate = dataManager.endOfMonth(date);

      expect(endOfMonthDate).toEqual(new Date(2018, 4, 31));
      expect(endOfMonthDate).not.toBe(date);
    });

    it('should handle monthName() to return name of month of date object', () => {
      const monthNamesOfDates = {
        'April': new Date(2018, 3, 14),
        'September': new Date(2015, 8, 1),
        'January': new Date(2012, 0, 23)
      };

      Object.keys(monthNamesOfDates).forEach(monthName => {
        expect(dataManager.monthName(monthNamesOfDates[monthName])).toStrictEqual(monthName);
      });
    });

    it('should handle dateOfDaysOfMonth() to return array of dates of month days', () => {
      const currentDate = new Date(2018, 8, 11);
      const endDateOfMonth = dataManager.endOfMonth(currentDate).getDate();

      const actualDateOfDays = Array.from(new Array(endDateOfMonth), (val, i) => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
      });

      expect(dataManager.dateOfDaysOfMonth(currentDate)).toEqual(actualDateOfDays);
    });

    it('should handle compareDatesWithoutTime() to return true if dates without time are equal', () => {
      const datePairs = [
        {
          first: new Date(2015, 4, 3, 12, 42, 49),
          second: new Date(2015, 4, 3, 14, 32, 40)
        },
        {
          first: new Date(2018, 8, 12, 1, 38, 20),
          second: new Date(2018, 8, 12, 3, 12, 30)
        }
      ];

      datePairs.forEach(pair => {
        expect(dataManager.compareDatesWithoutTime(pair.first, pair.second)).toBeTruthy();
      })
    });

    it('should handle compareDatesWithoutTime() to return false if dates without time aren\'t equal', () => {
      const datesPairs = [
        {
          first: new Date(2017, 4, 1, 14, 32, 40),
          second: new Date(2017, 4, 3, 14, 32, 40)
        },
        {
          first: new Date(2013, 8, 12, 14, 32, 20),
          second: new Date(2017, 4, 3, 14, 32, 40)
        }
      ];

      datesPairs.forEach(pair => {
        expect(dataManager.compareDatesWithoutTime(pair.first, pair.second)).toBeFalsy();
      })
    });
  });
});
