import React from 'react';
import classnames from 'classnames';
import styles from './Row.css';

const HORIZONTAL_ALIGNMENT = {
  start: 'start',
  end: 'end',
  center: 'center',
  between: 'between',
  around: 'around',
  evenly: 'evenly'
};

const VERTICAL_ALIGNMENT = {
  start: 'start',
  end: 'end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch'
};

const Row = ({children, hAlign, vAlign}) => (
  <div className={classnames(
    styles.row,
    styles[`row--h-${hAlign}`],
    styles[`row--v-${vAlign}`]
  )}>
    {
      children
    }
  </div>
);

Row.defaultProps = {
  hAlign: HORIZONTAL_ALIGNMENT.start,
  vAlign: VERTICAL_ALIGNMENT.stretch
};

export default Row;
