import React, { Component } from 'react';
import MonthToggler from '../components/MonthToggler/MonthToggler';
import CalendarHeader from '../components/CalendarHeader/CalendarHeader';
import CalendarMonth from './CalendarMonth';

class App extends Component {
  render() {
    const date = new Date();

    return (
      <div>
        <CalendarHeader />
        <MonthToggler date={date} />
        <CalendarMonth date={date}/>
      </div>
    );
  }
}

export default App;
