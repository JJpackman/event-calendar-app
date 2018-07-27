import React from 'react';
import classnames from 'classnames';
import styles from './Label.css';

export const TYPE = {
  tag: 'label--tag'
};

const Label = ({title, children, type}) => (
  <div className={classnames(
    styles.label,
    styles[type]
  )}>
    {children}
    <span className={styles['label__title']}>{title}</span>
  </div>
);

export default Label;

