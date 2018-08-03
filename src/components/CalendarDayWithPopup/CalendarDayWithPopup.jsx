import React from 'react';
import Popup from '../Popup/Popup';
import styles from './CalendarDayWithPopup.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const CalendarDayWithPopup = ({day, popupContent}) => (
  <div className={classnames(
    styles['calendar-day-pop-container']
  )}>
    <Popup
      trigger={day}
      content={popupContent}
    />
  </div>
);

CalendarDayWithPopup.propTypes = {
  day: PropTypes.node.isRequired,
  popupContent: PropTypes.node.isRequired
};

export default CalendarDayWithPopup;
