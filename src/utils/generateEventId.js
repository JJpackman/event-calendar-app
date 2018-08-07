import _ from 'lodash';

export default date => {
  if (!(date instanceof Date)) {
    throw new TypeError('Wrong argument type! Argument should be a Date object');
  }

  return _.uniqueId(date.toDateString());
}
