import React, {Component} from 'react';
import TextField from '../TextField/TextField';
import * as Button from '../Button/Button';
import * as Spacing from '../Spacing/Spacing';
import Label from '../Label/Label';
import Row from '../Row/Row';
import _ from 'lodash';
import FormValidator from '../../utils/formValidator';
import FormErrors from '../FormErrors/FormErrors';

const PATTERNS = {
  description: [/^([a-z]+)(?:(?: ){1}([a-z]+))*$/i],
  participants: [/^([A-Z]{1}[a-z]+)(?:(?:, ){1}([A-Z]{1}[a-z]+))*$/]
};

const ERROR_MESSAGES = {
  description: 'Invalid format',
  participants: 'Invalid format'
};

class EventFormLong extends Component {
  constructor() {
    super();

    this.state = {
      event: {
        description: '',
        participants: ''
      },
      empty: true,
      isFormValid: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.validator = new FormValidator();
    this.requiredFieldsValidStatus = {
      description: false
    };

    Object.keys(PATTERNS).forEach(field => {
      this.validator.addRule(field, PATTERNS[field]);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.isFormValid) {
      this.props.onAdd(this.state.event);
      this.setState({
        empty: false
      });
    }
  }

  handleDelete() {
    this.props.onDelete(this.state.event);
    this.setState({
      empty: true
    });
  }

  handleChange({target: {name, value}}) {
    this.setState(prevState => ({
      event: {
        ...prevState.event,
        [name]: value
      }
    }), () => this.validateField(name, value));
  }

  validateField(name, value) {
    const isRequired = (fieldName) => this.requiredFieldsValidStatus.hasOwnProperty(fieldName);
    const required = isRequired(name);
    const result = this.validator.validateField(name, value, required);

    if (required) {
      this.requiredFieldsValidStatus[name] = result;
    }

    this.setState({
      [name]: value
    }, this.validateForm);
  }

  validateForm() {
    const fieldsWithErrors = this.validator.fieldsWithErrors;

    const isValid = (field) => this.requiredFieldsValidStatus[field] === true;
    const isAllRequiredFieldsValid = Object.keys(this.requiredFieldsValidStatus).every(isValid);

    this.setState({
      isFormValid: fieldsWithErrors.length === 0 && isAllRequiredFieldsValid
    });
  }

  get formErrors() {
    const errors = {};

    this.validator.fieldsWithErrors.forEach(field => {
      errors[field] = ERROR_MESSAGES[field];
    });

    return errors;
  }

  render() {
    const fieldIds = {
      description: _.uniqueId('event-description'),
      participants: _.uniqueId('event-participants')
    };

    return (
      <form onSubmit={this.handleSubmit}>
        {
          this.validator.fieldsWithErrors.length > 0 && <FormErrors errors={this.formErrors} />
        }
        <Spacing.Vertical size="md" direction="bottom">
          <Spacing.Vertical size="sm" direction="bottom">
            <label htmlFor={fieldIds.description}>
              <Label title="Description: " />
            </label>
          </Spacing.Vertical>
          <Row>
            <TextField
              id={fieldIds.description}
              name="description"
              placeholder="Birthday"
              onChange={this.handleChange}
              required={true}
            />
          </Row>
        </Spacing.Vertical>
        <Spacing.Vertical size="md" direction="bottom">
          <Spacing.Vertical size="sm" direction="bottom">
            <label htmlFor={fieldIds.participants}>
              <Label title="Participants: " />
            </label>
          </Spacing.Vertical>
          <Row>
            <TextField
              id={fieldIds.participants}
              name="participants"
              placeholder="Nikolay, Olga"
              onChange={this.handleChange}
            />
          </Row>
        </Spacing.Vertical>
        <Button.Primary
          fluid={true}
          content={this.state.empty ? "Add event" : "Change event"}
          disabled={!this.state.isFormValid}
          btnAction="submit"
        />
        {
          !this.state.empty &&
          <Spacing.Vertical size="md">
            <Button.Danger
              fluid={true}
              onPress={this.handleDelete}
              content="Delete event"
              btnAction="button"
            />
          </Spacing.Vertical>
        }
      </form>
    );
  }
}

export default EventFormLong;
