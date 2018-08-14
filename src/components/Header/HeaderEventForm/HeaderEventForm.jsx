import React, { Component } from 'react';
import TextField from '../../common/TextField/TextField';
import * as Button from '../../common/Button/Button';
import * as Label from '../../common/Label/Label';
import _ from 'lodash';
import sprite from '../../../assets/img/sprite.svg';
import PropTypes from 'prop-types';
import FormValidator from '../../../utils/formValidator';
import FormErrors from '../../FormErrors/FormErrors';
import styles from '../style.css';

const patterns = {
  date: [/^(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.(20\d{2})$/],
  description: [/^([a-z]+)(?:(?: ){1}([a-z]+))*$/i],
  participants: [/^([A-Z]{1}[a-z]+)(?:(?:, ){1}([A-Z]{1}[a-z]+))*$/]
};

const errorMessages = {
  date: 'Invalid format',
  participants: 'Invalid format',
  description: 'Invalid format'
};

class HeaderEventForm extends Component {
  constructor() {
    super();

    this.state = {
      event: {
        date: '',
        description: '',
        participants: null
      },
      empty: true,
      isFormValid: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.validator = new FormValidator();
    this.requiredFieldsValidStatus = {
      description: false,
      date: false
    };

    Object.keys(patterns).forEach(field => {
      this.validator.addRule(field, patterns[field]);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.isFormValid) {
      this.setState({
        empty: false
      }, () => {
        const [ , day, month, year ] = patterns.date[0].exec(this.state.event.date);

        this.props.onAdd({
          ...this.state.event,
          date: new Date(+year, +month - 1, +day)
        });
      });
    }
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
    const errors = this.validator.fieldsWithErrors;

    const isValid = (field) => this.requiredFieldsValidStatus[field] === true;
    const isAllRequiredFieldsValid = Object.keys(this.requiredFieldsValidStatus).every(isValid);

    this.setState({
      isFormValid: errors.length === 0 && isAllRequiredFieldsValid
    });
  }

  get errors() {
    const errors = {};

    this.validator.fieldsWithErrors.forEach(field => {
      errors[field] = errorMessages[field];
    });

    return errors;
  }

  get fieldsIds() {
    const ids = {};

    Object.keys(this.state.event).forEach(field => {
      ids[field] = _.uniqueId(`event-${field}`);
    });

    return ids;
  }

  render() {
    const fieldIds = this.fieldsIds;
    const errors = this.validator.fieldsWithErrors;

    return (
      <form onSubmit={this.handleSubmit}>
        {
          errors.length > 0 && <FormErrors errors={this.errors} />
        }
        <div className={styles['header__event-form-field']}>
          <label
            className={styles['header__event-form-label']}
            htmlFor={fieldIds.date}
          >
            <Label.Text title="Date: " />
          </label>
          <TextField
            id={fieldIds.date}
            name="date"
            onChange={this.handleChange}
            placeholder="18.06.2018"
            required={true}
          />
        </div>
        <div className={styles['header__event-form-field']}>
          <label
            className={styles['header__event-form-label']}
            htmlFor={fieldIds.description}
          >
            <Label.Text title="Description: " />
          </label>
          <TextField
            id={fieldIds.description}
            name="description"
            onChange={this.handleChange}
            placeholder="Birthday"
            required={true}
          />
        </div>
        <div className={styles['header__event-form-field']}>
          <label
            className={styles['header__event-form-label']}
            htmlFor={fieldIds.participants}
          >
            <Label.Text title="Participants: " />
          </label>
          <TextField
            id={fieldIds.participants}
            name="participants"
            placeholder="Nikolay, Olga"
            onChange={this.handleChange}
          />
        </div>
        <Button.Primary
          disabled={!this.state.isFormValid}
          icon={
            <svg
              height="16"
              width="16"
              role="img"
            >
              <title>Добавить событие</title>
              <use xlinkHref={`${sprite}#plus`}></use>
            </svg>
          }
          btnAction="submit"
          size="sm"
        />
      </form>
    );
  }
}

HeaderEventForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default HeaderEventForm;
