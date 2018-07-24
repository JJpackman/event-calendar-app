import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';
import * as Icon from '../components/Icon/Icon';
import MonthToggler from '../components/MonthToggler/MonthToggler';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Button.Primary content="Add event" />
          <Icon.Small name="search" />
          <TextField />
        </Header>
        <MonthToggler date={new Date().toDateString()}/>
      </div>
    );
  }
}

export default App;
