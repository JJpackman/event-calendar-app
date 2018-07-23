import React from 'react';
import classnames from 'classnames';
import styles from './Icon.css';

const SIZE = {
  small: 'icon--sm',
  middle: 'icon--md',
  large: 'icon--lg'
};

const Icon = ({name, size}) => (
  <span
    className={classnames(
      styles.icon,
      styles[`icon--${name}`],
      styles[size]
    )}
  >
    <span className={styles['icon__text']}>{name}</span>
  </span>
);

Icon.defaultProps = {
  size: SIZE.small
};

export const Small = props => (
  <Icon {...props} size={SIZE.small}/>
);

export const Middle = props => (
  <Icon {...props} size={SIZE.middle}/>
);

export const Large = props => (
  <Icon {...props} size={SIZE.large}/>
);
