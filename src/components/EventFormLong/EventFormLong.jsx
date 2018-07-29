import React, {Component} from 'react';
import TextField from '../TextField/TextField';
import * as Button from '../Button/Button';
import * as Spacing from '../Spacing/Spacing';
import Label from '../Label/Label';
import Row from '../Row/Row';

class EventFormLong extends Component {
  constructor() {
    super();

    this.state = {
      event: {
        date: '',
        description: '',
        participants: ''
      },
      exist: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.event);
    this.setState({
      exist: true
    });
  }

  handleDelete() {
    this.props.onDelete(this.state.event);
    this.setState({
      exist: false
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Spacing.Vertical size={Spacing.SIZE.middle} direction="bottom">
          <Spacing.Vertical size={Spacing.SIZE.small} direction="bottom">
            <label htmlFor="e-form-short-field-date">
              <Label title="Date: " />
            </label>
          </Spacing.Vertical>
          <Row>
            <TextField id="e-form-short-field-date" name="date" placeholder="19.05.2018" />
          </Row>
        </Spacing.Vertical>
        <Spacing.Vertical size={Spacing.SIZE.middle}>
          <Spacing.Vertical size={Spacing.SIZE.small} direction="bottom">
            <label htmlFor="e-form-short-field-description">
              <Label title="Description: " />
            </label>
          </Spacing.Vertical>
          <Row>
            <TextField id="e-form-short-field-description" name="description" placeholder="Birthday"/>
          </Row>
        </Spacing.Vertical>
        <Spacing.Vertical size={Spacing.SIZE.middle} direction="bottom">
          <Spacing.Vertical size={Spacing.SIZE.small} direction="bottom">
            <label htmlFor="e-form-short-field-participants">
              <Label title="Participants: " />
            </label>
          </Spacing.Vertical>
          <Row>
            <TextField id="e-form-short-field-participants" name="participants" placeholder="Nikolay, Olga"/>
          </Row>
        </Spacing.Vertical>
        <Button.Primary fluid={true} content={this.state.exist ? "Change event" : "Add event"} btnAction="submit" />
        {
          this.state.exist &&
          <Spacing.Vertical size={Spacing.SIZE.middle}>
            <Button.Danger fluid={true} onPress={this.handleDelete} content="Delete event" btnAction="button" />
          </Spacing.Vertical>
        }
      </form>
    );
  }
}

export default EventFormLong;
