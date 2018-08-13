import React from 'react';
import classnames from 'classnames';
import styles from './Spacing.css';
import PropTypes from 'prop-types';

const Spacing = ({type, children, size, inline, direction}) => (
  <div className={classnames(
    styles['h-spacing'],
    styles[`h-spacing--${type}-${size}-${direction}`],
    inline && styles['h-spacing--inline']
  )}>
    {children}
  </div>
);

Spacing.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  direction: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node
};

Spacing.defaultProps = {
  size: 'sm',
  inline: false,
  direction: 'both'
};

export const Horizontal = props => (
  <Spacing {...props} type="horizontal" />
);

Horizontal.propTypes = {
  direction: PropTypes.oneOf(['both', 'right', 'left'])
};

export const Vertical = props => (
  <Spacing {...props} type="vertical" />
);

Vertical.propTypes = {
  direction: PropTypes.oneOf(['both', 'top', 'bottom'])
};
