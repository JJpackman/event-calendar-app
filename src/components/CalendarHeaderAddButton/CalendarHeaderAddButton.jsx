import React from 'react';
import * as Button from '../Button/Button';
import Popup from '../Popup/Popup';
import EventFormShort from '../EventFormShort/EventFormShort';
import styles from './CalendarHeaderAddButton.css';
import PropTypes from 'prop-types';

const CalendarHeaderAddButton = ({onAdd}) => (
  <div className={styles['calendar-header__add-btn']}>
    <Popup
      trigger={
        <Button.Primary content="Add event"/>
      }
      content={<EventFormShort onAdd={onAdd} />}
    />
  </div>
);

CalendarHeaderAddButton.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default CalendarHeaderAddButton;
