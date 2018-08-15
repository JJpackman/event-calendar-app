import React from 'react';
import * as Label from '../common/Label/Label';
import styles from './FormErrors.css';
import PropTypes from 'prop-types';

const FormErrors = ({errors}) => (
  <ul className={styles['form-errors']}>
    {
      Object.keys(errors).map((err, index) =>
        <li
          className={styles['form-errors__item']}
          key={index}>

          <Label.Text light={true} title={`${err}:`} />
          <span className={styles['form-errors__message']}>{errors[err]}</span>
        </li>
      )
    }
  </ul>
);

FormErrors.propTypes = {
  errors: PropTypes.object.isRequired
};

export default FormErrors;
