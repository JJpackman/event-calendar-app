import React from 'react';
import SearchBar from '../../containers/SearchBar';
import * as Button from '../common/Button/Button';
import Popup from '../common/Popup/Popup';
import Container from '../common/Container/Container';
import HeaderEventForm from '../../containers/HeaderEventForm';
import styles from './style.css';

const CalendarHeader = () => (
  <header className={styles['header']}>
    <Container>
      <div className={styles['header__content']}>
        <Popup
          trigger={<Button.Primary text="Add event"/>}
          content={<HeaderEventForm />}
        />
        <SearchBar />
      </div>
    </Container>
  </header>
);

export default CalendarHeader;
