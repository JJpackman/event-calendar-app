import React from 'react';
import * as Button from '../Button/Button';
import Popup from '../Popup/Popup';
import EventFormShort from '../EventFormShort/EventFormShort';
import styles from './CalendarHeaderAddButton.css';

const CalendarHeaderAddButton = ({onAdd}) => (
  <div className={styles['calendar-header__add-btn']}>
    <Popup
      trigger={
        <Button.Primary content="Add event" />
      }
      content={<EventFormShort onAdd={onAdd} />}
    />
  </div>
);

export default CalendarHeaderAddButton;
