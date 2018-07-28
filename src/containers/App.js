import React, { Component } from 'react';
import MonthToggler from '../components/MonthToggler/MonthToggler';
import CalendarDay from '../components/CalendarDay/CalendarDay';
import Container from '../components/Container/Container';
import Popup from '../components/Popup/Popup';
import CalendarHeader from '../components/CalendarHeader/CalendarHeader';

class App extends Component {
  render() {
    const currDate = new Date();
    const event = {
      date: currDate,
      participants: ['Johny', 'Bill', 'Sandra'],
      description: 'Birthday'
    };

    return (
      <div>
        <CalendarHeader />
        <MonthToggler date={currDate} />
        <Container>
          <Popup
            trigger={
              <CalendarDay
              date={currDate}
              event={event}
              />
            }
            content="kek"
            position="right-top"
          />
        </Container>
      </div>
    );
  }
}

export default App;
