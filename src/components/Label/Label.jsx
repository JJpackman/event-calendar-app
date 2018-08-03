import React from 'react';
import classnames from 'classnames';
import styles from './Label.css';
import PropTypes from 'prop-types';

const Label = ({title, children, type}) => (
  <div className={classnames(
    styles.label,
    styles[`label--${type}`]
  )}>
    {children}
    <span className={styles['label__title']}>{title}</span>
  </div>
);

Label.propTypes = {
  type: PropTypes.oneOf(['tag']),
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default Label;

