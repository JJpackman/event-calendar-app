import _ from 'lodash';

export default date => {
  if (date instanceof Date) {
    return _.uniqueId(date.toDateString());
  } else {
    throw new TypeError('Wrong argument type! Argument should be a Date object');
  }
}
