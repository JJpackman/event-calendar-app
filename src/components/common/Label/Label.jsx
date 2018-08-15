import React from 'react';
import classnames from 'classnames';
import styles from './Label.css';
import PropTypes from 'prop-types';

const Label = ({title, type, light}) => (
  <div className={classnames(
    styles.label,
    styles[`label--${type}`],
    light && styles['label--light']
  )}>
    {title}
  </div>
);

Label.propTypes = {
  type: PropTypes.oneOf(['tag']),
  title: PropTypes.string.isRequired,
  light: PropTypes.bool
};

export const Text = ({title, light}) => (
  <Label title={title} light={light} />
);

export const Tag = ({title}) => (
  <Label title={title} type="tag" />
);

