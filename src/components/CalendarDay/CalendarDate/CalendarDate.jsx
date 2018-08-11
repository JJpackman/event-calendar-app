import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.css';

const CalendarDate = ({date}) => (
  <span className={styles['calendar-day__date']}>
    {date.toDateString()}
  </span>
);

CalendarDate.propTypes = {
  date: PropTypes.object.isRequired
};

export default CalendarDate;
