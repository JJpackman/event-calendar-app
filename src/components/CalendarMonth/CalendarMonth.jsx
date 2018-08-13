import React from 'react';
import Container from '../common/Container/Container';
import CalendarDayWithPopup from '../CalendarDayWithPopup/CalendarDayWithPopup';
import CalendarDay from '../CalendarDay/CalendarDay';
import * as EventForm from '../EventForm/EventForm';
import PropTypes from 'prop-types';
import dataManager from '../../utils/dateManager';
import styles from './CalendarMonth.css';

const CalendarMonth = ({date, events, addEvent}) => {
  const daysDates = dataManager.dateOfDaysOfMonth(date).map(dayDate => dayDate);
  const findEventForThatDate = (date) => events.find(event => dataManager.compareDatesWithoutTime(event.date, date));

  return (
    <Container>
      <div className={styles['calendar__month']}>
        {
          daysDates.map((dayDate, index) => (
            <CalendarDayWithPopup
              key={index}
              day={
                <CalendarDay
                  date={dayDate}
                  event={findEventForThatDate(dayDate)}
                />
              }
              popupContent={
                <EventForm.Full onAdd={addEvent}/>
              }
            />
          ))
        }
      </div>
    </Container>
  );
};

CalendarMonth.propTypes = {
  addEvent: PropTypes.func.isRequired
};

export default CalendarMonth;
