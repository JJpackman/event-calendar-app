const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const dateManager = () => {
  return {
    moveMonths(date, number) {
      const dateClone = this.clone(date);
      const currentMonth = dateClone.getMonth();
      const dayOfCurrentMonth = dateClone.getDate();

      dateClone.setDate(1);
      dateClone.setMonth(currentMonth + number);

      const lastDayOfDestinationMonth = this.endOfMonth(dateClone).getDate();

      dateClone.setDate(dayOfCurrentMonth > lastDayOfDestinationMonth ? lastDayOfDestinationMonth : dayOfCurrentMonth);

      return dateClone;
    },
    endOfMonth(date) {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    },
    monthName(date) {
      return MONTH_NAMES[date.getMonth()];
    },
    clone(date) {
      return new Date(date.getTime());
    },
    dateOfDaysOfMonth(date) {
      const dateClone = this.clone(date);
      const endOfMonthDate = this.endOfMonth(dateClone).getDate();

      return Array.from(new Array(endOfMonthDate), (val, i) => {
        return new Date(dateClone.getFullYear(), dateClone.getMonth(), i + 1);
      });
    },
    compareDatesWithoutTime(date1, date2) {
      const date1Clone = this.clone(date1);
      const date2Clone = this.clone(date2);

      date1Clone.setHours(0, 0, 0, 0);
      date2Clone.setHours(0, 0, 0, 0);

      return date1Clone.getTime() === date2Clone.getTime();
    }
  };
};

export default dateManager();
