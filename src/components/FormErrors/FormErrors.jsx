import React from 'react';
import Label from '../Label/Label';
import styles from './FormErrors.css';
import Row from '../Row/Row';
import PropTypes from 'prop-types';

const FormErrors = ({errors}) => (
  <div className={styles['form-errors']}>
    {
      Object.keys(errors).map((err, index) =>
        <Row key={index} hAlign="between" vAlign="center" wrapping="wrap">

          <Label title={`${err}:`} />
          <span className={styles['form-errors__message']}>{errors[err]}</span>
        </Row>
      )
    }
  </div>
);

FormErrors.propTypes = {
  errors: PropTypes.object.isRequired
};

export default FormErrors;
