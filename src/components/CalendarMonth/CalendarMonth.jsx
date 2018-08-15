import React, { Component } from 'react';
import Container from '../common/Container/Container';
import CalendarDay from '../CalendarDay/CalendarDay';
import Popup from '../common/Popup/Popup';
import MonthItemEventForm from './MonthItemEventForm/MonthItemEventForm';
import PropTypes from 'prop-types';
import dataManager from '../../utils/dateManager';
import styles from './style.css';

class CalendarMonth extends Component {
  render() {
    const {
      date,
      events
    } = this.props;

    const daysDates = dataManager.dateOfDaysOfMonth(date).map(dayDate => dayDate);
    const getEventForThatDate = (date) => events.find(event => dataManager.compareDatesWithoutTime(event.date, date));

    return (
      <Container>
        <div className={styles['calendar__month']}>
          {
            daysDates.map((dayDate, index) => {
              const event = getEventForThatDate(dayDate);

              return (
                <div
                  key={index}
                  className={styles['calendar__month-item']}>
                  <Popup
                    trigger={
                      <CalendarDay
                        date={dayDate}
                        event={event}
                      />
                    }
                    content={
                      <MonthItemEventForm
                        onAdd={this.props.addEvent}
                        onDelete={this.props.deleteEvent}
                        onEdit={this.props.editEvent}
                        eventDate={dayDate}
                        existedEvent={event}
                      />
                    }
                  />
                </div>
              );
            })
          }
        </div>
      </Container>
    );
  }
}

CalendarMonth.propTypes = {
  addEvent: PropTypes.func.isRequired,
  editEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CalendarMonth;
