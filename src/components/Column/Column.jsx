import React from 'react';
import classnames from 'classnames';
import styles from './Column.css';

const ALIGNMENT = {
  start: 'start',
  end: 'end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch'
};

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

Column.defaultProps = {
  alignSelf: ALIGNMENT.stretch
};

export default Column;
