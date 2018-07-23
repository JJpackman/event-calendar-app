import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';
import * as Icon from '../components/Icon/Icon';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Button.Primary>Add event</Button.Primary>
          <TextField />
          <Icon.Middle name="search" />
        </Header>
      </div>
    );
  }
}

export default App;
