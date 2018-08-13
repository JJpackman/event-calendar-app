import React, { Component } from 'react';
import Container from '../common/Container/Container';
import CalendarDay from '../CalendarDay/CalendarDay';
import Popup from '../common/Popup/Popup';
import MonthItemEventForm from './MonthItemEventForm/MonthItemEventForm';
import PropTypes from 'prop-types';
import dataManager from '../../utils/dateManager';
import styles from './style.css';

class CalendarMonth extends Component {
  constructor() {
    super();

    this.state = {
      isAnyPopupOpen: false
    };

    this.toggleAnyPopupOpen = this.toggleAnyPopupOpen.bind(this);
    this.addEventAndHidePopup = this.addEventAndHidePopup.bind(this);
    this.editEventAndHidePopup = this.editEventAndHidePopup.bind(this);
    this.deleteEventAndHidePopup = this.deleteEventAndHidePopup.bind(this);
  }

  toggleAnyPopupOpen() {
    this.setState(prevState => ({
      isAnyPopupOpen: !prevState.isAnyPopupOpen
    }));
  }

  addEventAndHidePopup(event) {
    this.props.addEvent(event);
    this.toggleAnyPopupOpen();
  }

  editEventAndHidePopup(event) {
    this.props.editEvent(event);
    this.toggleAnyPopupOpen();
  }

  deleteEventAndHidePopup(id) {
    this.props.deleteEvent(id);
    this.toggleAnyPopupOpen();
  }

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
                        onAdd={this.addEventAndHidePopup}
                        onDelete={this.deleteEventAndHidePopup}
                        onEdit={this.editEventAndHidePopup}
                        eventDate={dayDate}
                        existedEvent={event}
                      />
                    }
                    externalIsOpen={this.state.isAnyPopupOpen}
                    externalOpenToggler={this.toggleAnyPopupOpen}
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
