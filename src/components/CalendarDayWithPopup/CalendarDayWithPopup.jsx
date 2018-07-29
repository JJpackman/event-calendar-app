import React from 'react';
import Popup from '../Popup/Popup';
import styles from './CalendarDayWithPopup.css';
import classnames from 'classnames';

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

export default CalendarDayWithPopup;
