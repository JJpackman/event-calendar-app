import React from 'react';
import classnames from 'classnames';
import styles from './VerticalSpacing.css';

export const SIZE = {
  small: 'h-vertical-spacing--small',
  middle: 'h-vertical-spacing--middle',
  large: 'h-vertical-spacing--large'
};

const VerticalSpacing = ({size, children}) => (
  <div className={classnames(styles[size])}>
    {children}
  </div>
);

VerticalSpacing.defaultProps = {
  size: SIZE.small
};

export default VerticalSpacing;
