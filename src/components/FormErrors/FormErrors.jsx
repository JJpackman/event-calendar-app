import React from 'react';
import * as Label from '../Label/Label';
import styles from './FormErrors.css';
import PropTypes from 'prop-types';

const FormErrors = ({errors}) => (
  <div className={styles['form-errors']}>
    {
      Object.keys(errors).map((err, index) =>
        <div
          className={styles['form-errors__item']}
          key={index}>

          <Label.Text light={true} title={`${err}:`} />
          <span className={styles['form-errors__message']}>{errors[err]}</span>
        </div>
      )
    }
  </div>
);

FormErrors.propTypes = {
  errors: PropTypes.object.isRequired
};

export default FormErrors;
