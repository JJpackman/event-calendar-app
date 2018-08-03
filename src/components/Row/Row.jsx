import React from 'react';
import classnames from 'classnames';
import styles from './Row.css';
import PropTypes from 'prop-types';

const Row = ({children, hAlign, vAlign, wrapping}) => (
  <div className={classnames(
    styles.row,
    styles[`row--h-${hAlign}`],
    styles[`row--v-${vAlign}`],
    styles[`row--${wrapping}`]
  )}>
    {
      children
    }
  </div>
);

Row.propTypes = {
  hAlign: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
  vAlign: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  wrapping: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
  children: PropTypes.node.isRequired
};

Row.defaultProps = {
  hAlign: 'start',
  vAlign: 'stretch',
  wrapping: 'wrap'
};

export default Row;
