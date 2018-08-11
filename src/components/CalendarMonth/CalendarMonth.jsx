import React from 'react';
import Container from '../common/Container/Container';
import CalendarDayWithPopup from '../CalendarDayWithPopup/CalendarDayWithPopup';
import CalendarDay from '../CalendarDay/CalendarDay';
import EventFormLong from '../EventFormLong/EventFormLong';
import PropTypes from 'prop-types';
import styles from './CalendarMonth.css';

const CalendarMonth = ({days}) => (
  <Container>
    <div className={styles['calendar__month']}>
      {
        days.map((day, index) => (
          <CalendarDayWithPopup key={index}
            day={
              <CalendarDay
                date={day.date}
                event={day.event}
              />
            }
            popupContent={
              <EventFormLong
                onAdd={() => console.log('Add')}
                onDelete={() => console.log('Delete')}
              />
            }
          />
        ))
      }
    </div>
  </Container>
);

CalendarMonth.propTypes = {
  days: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CalendarMonth;
