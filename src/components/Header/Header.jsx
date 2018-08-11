import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import * as Button from '../Button/Button';
import Popup from '../Popup/Popup';
import EventFormShort from '../EventFormShort/EventFormShort';
import Container from '../common/Container/Container';
import styles from './style.css';

const CalendarHeader = ({addEvent}) => (
  <header className={styles['header']}>
    <Container>
      <div className={styles['header__content']}>
        <Popup
          trigger={<Button.Primary content="Add event"/>}
          content={<EventFormShort onAdd={addEvent} />}
        />
        <SearchBar />
      </div>
    </Container>
  </header>
);

export default CalendarHeader;
