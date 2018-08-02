import React, { Component } from 'react';
import TextField from '../TextField/TextField';
import * as Button from '../Button/Button';
import * as Spacing from '../Spacing/Spacing';
import Label from '../Label/Label';
import Row from '../Row/Row';
import _ from 'lodash';

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
    const fieldIds = {
      date: _.uniqueId('event-date'),
      description: _.uniqueId('event-description')
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <Spacing.Vertical size={Spacing.SIZE.middle} direction="bottom">
          <Spacing.Vertical size={Spacing.SIZE.small} direction="bottom">
            <label htmlFor={fieldIds.date}>
              <Label title="Date: " />
            </label>
          </Spacing.Vertical>
          <Row>
            <TextField id={fieldIds.date} name="date" placeholder="19.05.2018" />
          </Row>
        </Spacing.Vertical>
        <Spacing.Vertical size={Spacing.SIZE.middle} direction="bottom">
          <Spacing.Vertical size={Spacing.SIZE.small} direction="bottom">
            <label htmlFor={fieldIds.description}>
              <Label title="Description: " />
            </label>
          </Spacing.Vertical>
          <Row>
            <TextField id={fieldIds.description} name="description" placeholder="Birthday"/>
          </Row>
        </Spacing.Vertical>
        <Button.Primary fluid={true} content="Add event" btnAction="submit" />
      </form>
    );
  }
}

export default EventFormShort;
