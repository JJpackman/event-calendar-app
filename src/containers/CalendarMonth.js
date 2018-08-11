import React, { Component } from 'react';
import CalendarMonthView from '../components/CalendarMonth/CalendarMonth';
import PropTypes from 'prop-types';
import dataManager from '../utils/dateManager';

class CalendarMonth extends Component {
  render() {
    const {date} = this.props;

    const event = {
      date,
      participants: ['Johny', 'Bill', 'Sandra'],
      description: 'Birthday'
    };

    const days = dataManager.dateOfDaysOfMonth(date).map(dayDate => ({
      date: dayDate,
      event
    }));

    return (
      <CalendarMonthView days={days}/>
    );
  }
}

CalendarMonth.propTypes = {
  date: PropTypes.object.isRequired
};

export default CalendarMonth;
