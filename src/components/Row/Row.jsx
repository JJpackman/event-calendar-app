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

const WRAPPING = {
  wrap: 'wrap',
  nowrap: 'nowrap',
  wrapReverse: 'wrap-reverse'
};

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

Row.defaultProps = {
  hAlign: HORIZONTAL_ALIGNMENT.start,
  vAlign: VERTICAL_ALIGNMENT.stretch,
  wrapping: WRAPPING.nowrap
};

export default Row;
