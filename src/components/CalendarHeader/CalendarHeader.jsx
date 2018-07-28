import React from 'react';
import Header from '../Header/Header';
import * as Button from '../Button/Button';
import Popup from '../Popup/Popup';
import EventFormShort from '../EventFormShort/EventFormShort';
import Row from '../Row/Row';
import SearchField from '../SearchField/SearchField';

const CalendarHeader = () => (
  <Header>
    <Row
      hAlign="between"
      vAlign="center"
    >
      <Popup
          trigger={
            <Button.Primary content="Add event" />
          }
          content={<EventFormShort onAdd={() => console.log('Added')} />}
        />
      <div>
        <SearchField />
      </div>
    </Row>
  </Header>
);

export default CalendarHeader;
