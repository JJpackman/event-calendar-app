import React, { Component } from 'react';
import MonthToggler from '../components/MonthToggler/MonthToggler';
import CalendarHeader from '../components/CalendarHeader/CalendarHeader';
import CalendarMonth from './CalendarMonth';

class App extends Component {
  constructor() {
    super();

    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
  }

  nextMonth() {
    console.log('Next month');
  }

  prevMonth() {
    console.log('Prev month');
  }

  render() {
    const date = new Date();

    return (
      <div>
        <CalendarHeader />
        <MonthToggler
          date={date}
          onNextMonth={this.nextMonth}
          onPrevMonth={this.prevMonth}
        />
        <CalendarMonth date={date}/>
      </div>
    );
  }
}

export default App;
