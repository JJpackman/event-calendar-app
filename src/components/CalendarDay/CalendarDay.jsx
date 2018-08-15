import React from 'react';
import PropTypes from 'prop-types';
import CalendarEvent from './CalendarEvent/CalendarEvent';
import styles from './style.css';

const CalendarDay = ({date, event}) => {
  return (
    <article className={styles['calendar-day']}>
      <span className={styles['calendar-day__date']}>
        {date.toDateString()}
      </span>
      { event && <CalendarEvent event={event} /> }
    </article>
  );
};

CalendarDay.propTypes = {
  date: PropTypes.object.isRequired,
  event: PropTypes.object
};

export default CalendarDay;
