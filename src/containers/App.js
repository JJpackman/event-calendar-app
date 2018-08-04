import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MonthToggler from '../components/MonthToggler/MonthToggler';
import CalendarHeader from '../components/CalendarHeader/CalendarHeader';
import CalendarMonth from './CalendarMonth';
import * as dateActions from '../actions/date';
import { getDate } from '../selectors/selectors';

class App extends Component {
  render() {
    const {
      date,
      moveToNextMonth,
      moveToPrevMonth
    } = this.props;

    return (
      <div>
        <CalendarHeader />
        <MonthToggler
          date={date}
          onNextMonth={moveToNextMonth}
          onPrevMonth={moveToPrevMonth}
        />
        <CalendarMonth date={date}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  date: getDate(state)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(dateActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
