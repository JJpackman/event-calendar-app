import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';
import * as Icon from '../components/Icon/Icon';
import MonthToggler from '../components/MonthToggler/MonthToggler';
import * as Spacing from '../components/Spacing/Spacing';
import CalendarDay from '../components/CalendarDay/CalendarDay';
import Container from '../components/Container/Container';
import Popup from '../components/Popup/Popup';
import EventFormShort from '../components/EventFormShort/EventFormShort';

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
        <Header>
          <Popup
            trigger={
              <Button.Primary content="Add event" />
            }
            content={<EventFormShort onAdd={() => console.log('Added')} />}
          />
          <Spacing.Horizontal size={Spacing.SIZE.middle} inline={true}>
            <Icon.Small name="search" />
          </Spacing.Horizontal>
          <TextField />
        </Header>
        <MonthToggler date={currDate}/>
        <Container>
          <Popup
            trigger={
              <CalendarDay
              date={currDate}
              event={event}
              />
            }
            content={<EventFormShort onAdd={() => console.log('Added')} />}
            position="right-top"
          />
        </Container>
      </div>
    );
  }
}

export default App;
