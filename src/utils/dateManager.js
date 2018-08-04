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
    }
  };
};

export default dateManager();
