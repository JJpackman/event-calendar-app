import React, { Component } from 'react';
import CalendarMonthView from '../components/CalendarMonth/CalendarMonth';
import PropTypes from 'prop-types';

class CalendarMonth extends Component {
  render() {
    const {date} = this.props;

    const event = {
      date,
      participants: ['Johny', 'Bill', 'Sandra'],
      description: 'Birthday'
    };

    const days = [
      {date, event},
      {date, event},
      {date, event},
      {date, event},
      {date, event},
      {date, event},
      {date, event},
      {date, event}
    ];

    return (
      <CalendarMonthView days={days}/>
    );
  }
}

CalendarMonth.propTypes = {
  date: PropTypes.object.isRequired
};

export default CalendarMonth;
