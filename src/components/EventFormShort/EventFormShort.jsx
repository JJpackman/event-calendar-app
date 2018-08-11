import React, { Component } from 'react';
import TextField from '../TextField/TextField';
import * as Button from '../Button/Button';
import * as Spacing from '../Spacing/Spacing';
import * as Label from '../Label/Label';
import _ from 'lodash';
import FormValidator from '../../utils/formValidator';
import FormErrors from '../FormErrors/FormErrors';

const PATTERNS = {
  date: [
    /^(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.(20\d{2})$/,
    /^(3[01]|[12][0-9]|0?[1-9])-(1[012]|0?[1-9])-(20\d{2})$/
  ],
  description: [/^([a-z]+)(?:(?: ){1}([a-z]+))*$/i]
};

const ERROR_MESSAGES = {
  date: 'Invalid format',
  description: 'Invalid format'
};

class EventFormShort extends Component {
  constructor() {
    super();

    this.state = {
      event: {
        date: '',
        description: ''
      },
      isFormValid: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.validator = new FormValidator();
    this.requiredFieldsValidStatus = {
      date: false,
      description: false
    };

    Object.keys(PATTERNS).forEach(field => {
      this.validator.addRule(field, PATTERNS[field]);
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

  handleSubmit(e) {
    e.preventDefault();
    this.state.isFormValid && this.props.onAdd(this.state.event);
  }

  render() {
    const fieldIds = {
      date: _.uniqueId('event-date'),
      description: _.uniqueId('event-description')
    };

    return (
      <form onSubmit={this.handleSubmit}>
        {
          this.validator.fieldsWithErrors.length > 0 && <FormErrors errors={this.formErrors} />
        }
        <Spacing.Vertical size="md" direction="bottom">
          <Spacing.Vertical size="sm" direction="bottom">
            <label htmlFor={fieldIds.date}>
              <Label.Text title="Date: " />
            </label>
          </Spacing.Vertical>
          <TextField
            id={fieldIds.date}
            name="date"
            onChange={this.handleChange}
            placeholder="19.05.2018"
            required={true}
          />
        </Spacing.Vertical>
        <Spacing.Vertical size="md" direction="bottom">
          <Spacing.Vertical size="sm" direction="bottom">
            <label htmlFor={fieldIds.description}>
              <Label.Text title="Description: " />
            </label>
          </Spacing.Vertical>
          <TextField
            id={fieldIds.description}
            name="description"
            onChange={this.handleChange}
            placeholder="Birthday"
            required={true}
          />
        </Spacing.Vertical>
        <Button.Primary
          fluid={true}
          disabled={!this.state.isFormValid}
          content="Add event"
          btnAction="submit"
        />
      </form>
    );
  }
}

export default EventFormShort;
