import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import * as Button from '../common/Button/Button';
import Popup from '../common/Popup/Popup';
import * as EventForm from '../EventForm/EventForm';
import Container from '../common/Container/Container';
import styles from './style.css';

const CalendarHeader = ({addEvent}) => (
  <header className={styles['header']}>
    <Container>
      <div className={styles['header__content']}>
        <Popup
          trigger={<Button.Primary text="Add event"/>}
          content={<EventForm.Short onAdd={addEvent} />}
        />
        <SearchBar />
      </div>
    </Container>
  </header>
);

export default CalendarHeader;
