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
  description: [/^([a-z]+)(?:(?: ){1}([a-z]+))*$/i],
  participants: [/^([A-Z]{1}[a-z]+)(?:(?:, ){1}([A-Z]{1}[a-z]+))*$/]
};

const errorMessages = {
  participants: 'Invalid format',
  description: 'Invalid format'
};

class MonthItemEventForm extends Component {
  constructor(props) {
    super(props);

    const { existedEvent } = this.props;

    this.state = existedEvent ? {
      event: {
        description: existedEvent.description,
        participants: existedEvent.participants
      },
      empty: false,
      isFormValid: true
    } : {
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
      if (this.state.empty) {
        this.setState({
          empty: false
        }, () => {
          this.props.onAdd({
            ...this.state.event,
            date: this.props.eventDate
          });
        });
      } else {
        this.props.onEdit({
          ...this.state.event,
          date: this.props.existedEvent.date,
          id: this.props.existedEvent.id
        });
      }
    }
  }

  handleDelete() {
    this.setState({
      empty: true
    }, () => {
      this.props.onDelete(this.props.existedEvent.id);
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
            defaultValue={this.state.event.description}
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
            defaultValue={this.state.event.participants}
          />
        </div>
        <div className={styles['calendar__event-form-buttons']}>
          <Button.Primary
            disabled={!this.state.isFormValid}
            icon={
              this.state.empty ?
                <svg
                  height="16"
                  width="16"
                  role="img"
                >
                  <title>Добавить событие</title>
                  <use xlinkHref={`${sprite}#plus`}></use>
                </svg> :
                <svg
                  height="16"
                  width="16"
                  role="img"
                >
                  <title>Редактировать событие</title>
                  <use xlinkHref={`${sprite}#pen`}></use>
                </svg>
              }
            btnAction="submit"
            size="sm"
          />
          {
            !this.state.empty &&
            <Button.Danger
              onPress={this.handleDelete}
              icon={
                <svg
                  height="16"
                  width="16"
                  role="img"
                >
                  <title>Удалить событие</title>
                  <use xlinkHref={`${sprite}#trash`}></use>
                </svg>
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
  onEdit: PropTypes.func.isRequired,
  existedEvent: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    participants: PropTypes.string
  }),
  eventDate: PropTypes.object.isRequired
};

export default MonthItemEventForm;
