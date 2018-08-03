import React from 'react';
import classnames from 'classnames';
import styles from './Column.css';
import PropTypes from 'prop-types';

const Column = ({children, alignSelf}) => (
  <div className={classnames(
    styles.column,
    styles[`column--self-${alignSelf}`]
  )}>
    {
      children
    }
  </div>
);

Column.propTypes = {
  alignSelf: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  children: PropTypes.node.isRequired
};

Column.defaultProps = {
  alignSelf: 'stretch'
};

export default Column;
