import React from 'react';
import classnames from 'classnames';
import styles from './Spacing.css';

const TYPES = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

export const SIZE = {
  small: 'sm',
  middle: 'md',
  large: 'lg'
};

const Spacing = ({type, children, size, inline, direction}) => (
  <div className={classnames(
    styles['h-spacing'],
    styles[`h-spacing--${type}-${size}-${direction}`],
    inline && styles['h-spacing--inline']
  )}>
    {children}
  </div>
);

Spacing.defaultProps = {
  size: SIZE.small,
  inline: false,
  direction: 'both'
};

export const Horizontal = props => (
  <Spacing {...props} type={TYPES.horizontal} />
);

export const Vertical = props => (
  <Spacing {...props} type={TYPES.vertical} />
);