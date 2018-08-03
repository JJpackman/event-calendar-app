import React from 'react';
import classnames from 'classnames';
import styles from './Icon.css';
import PropTypes from 'prop-types';

const Icon = ({name, size}) => (
  <span
    className={classnames(
      styles.icon,
      styles[`icon--${name}`],
      styles[`icon--${size}`]
    )}
  >
    <span className={styles['icon__text']}>{name}</span>
  </span>
);

Icon.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Icon.defaultProps = {
  size: 'sm'
};

export const Small = props => (
  <Icon {...props} size="sm"/>
);

export const Middle = props => (
  <Icon {...props} size="md"/>
);

export const Large = props => (
  <Icon {...props} size="lg"/>
);
