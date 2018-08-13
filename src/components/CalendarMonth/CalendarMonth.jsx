import React from 'react';
import Container from '../common/Container/Container';
import CalendarDay from '../CalendarDay/CalendarDay';
import Popup from '../common/Popup/Popup';
import MonthItemEventForm from './MonthItemEventForm/MonthItemEventForm';
import PropTypes from 'prop-types';
import dataManager from '../../utils/dateManager';
import styles from './style.css';

const CalendarMonth = ({date, events, addEvent, editEvent, deleteEvent}) => {
  const daysDates = dataManager.dateOfDaysOfMonth(date).map(dayDate => dayDate);
  const getEventForThatDate = (date) => events.find(event => dataManager.compareDatesWithoutTime(event.date, date));

  return (
    <Container>
      <div className={styles['calendar__month']}>
        {
          daysDates.map((dayDate, index) => (
            <div
              key={index}
              className={styles['calendar__month-item']}>
              <Popup
                trigger={
                  <CalendarDay
                    date={dayDate}
                    event={getEventForThatDate(dayDate)}
                  />
                }
                content={
                  <MonthItemEventForm
                    onAdd={addEvent}
                    onDelete={deleteEvent}
                    onEdit={editEvent}
                  />
                }
              />
            </div>
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
