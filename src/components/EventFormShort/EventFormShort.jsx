import React, { Component } from 'react';
import TextField from '../TextField/TextField';
import * as Button from '../Button/Button';
import * as Spacing from '../Spacing/Spacing';
import Label from '../Label/Label';

class EventFormShort extends Component {
  constructor() {
    super();

    this.state = {
      event: {
        date: '',
        description: '',
        participants: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Spacing.Vertical size={Spacing.SIZE.middle}>
          <Spacing.Vertical size={Spacing.SIZE.small} direction="bottom">
            <label htmlFor="e-form-short-field-date">
              <Label title="Date: " />
            </label>
          </Spacing.Vertical>
          <div>
            <TextField id="e-form-short-field-date" name="date" placeholder="19.05.2018" />
          </div>
        </Spacing.Vertical>
        <Spacing.Vertical size={Spacing.SIZE.middle} direction="bottom">
          <Spacing.Vertical size={Spacing.SIZE.small} direction="bottom">
            <label htmlFor="e-form-short-field-description">
              <Label title="Description: " />
            </label>
          </Spacing.Vertical>
          <div>
            <TextField id="e-form-short-field-description" name="description" placeholder="Birthday"/>
          </div>
        </Spacing.Vertical>
        <Button.Primary fluid={true} content="Add event" btnAction="submit" />
      </form>
    );
  }
}

export default EventFormShort;
