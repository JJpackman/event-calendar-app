import React, { Component } from 'react';
import Header from '../components/Header/Header';
import * as Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Button.Primary>Add event</Button.Primary>
          <TextField />
        </Header>
      </div>
    );
  }
}

export default App;
