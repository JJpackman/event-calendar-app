import React, { Component } from 'react';
import TextField from '../../common/TextField/TextField';
import * as Button from '../../common/Button/Button';
import * as Label from '../../common/Label/Label';
import _ from 'lodash';
import addIcon from '../../../assets/img/plus.svg';
import deleteIcon from '../../../assets/img/trash.svg';
import editIcon from '../../../assets/img/pen.svg';
import PropTypes from 'prop-types';
import FormValidator from '../../../utils/formValidator';
import FormErrors from '../../FormErrors/FormErrors';
import styles from '../style.css';

const patterns = {
  description: [/^([a-z]+)(?:(?: ){1}([a-z]+))*$/i],
  participants: [/^([A-Z]{1}[a-z]+)(?:(?:, ){1}([A-Z]{1}[a-z]+))*$/]
};

const errorMessages = {
  participants: 'Invalid format',
  description: 'Invalid format'
};

class MonthItemEventForm extends Component {
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

    Object.keys(patterns).forEach(field => {
      this.validator.addRule(field, patterns[field]);
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
        <div className={styles['calendar__event-form-field']}>
          <label
            className={styles['calendar__event-form-label']}
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
        <div className={styles['calendar__event-form-field']}>
          <label
            className={styles['calendar__event-form-label']}
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
        <div className={styles['calendar__event-form-buttons']}>
          <Button.Primary
            disabled={!this.state.isFormValid}
            icon={
              this.state.empty ?
                <img
                  src={addIcon}
                  alt="Add"
                  width="16"
                  height="16"
                /> :
                <img
                  src={editIcon}
                  alt="Edit"
                  width="16"
                  height="16"
                />
              }
            btnAction="submit"
            size="sm"
          />
          {
            !this.state.empty &&
            <Button.Danger
              onPress={this.handleDelete}
              icon={
                <img
                  src={deleteIcon}
                  alt="Delete"
                  width="16"
                  height="16"
                />
              }
              btnAction="button"
              size="sm"
            />
          }
        </div>
      </form>
    );
  }
}

MonthItemEventForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default MonthItemEventForm;
