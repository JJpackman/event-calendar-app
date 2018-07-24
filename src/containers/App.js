import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';
import * as Icon from '../components/Icon/Icon';
import MonthToggler from '../components/MonthToggler/MonthToggler';
import * as Spacing from '../components/Spacing/Spacing';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Button.Primary content="Add event" />
          <Spacing.Horizontal size={Spacing.SIZE.middle} inline={true}>
            <Icon.Small name="search" />
          </Spacing.Horizontal>
          <TextField />
        </Header>
        <MonthToggler date={new Date().toDateString()}/>
      </div>
    );
  }
}

export default App;
