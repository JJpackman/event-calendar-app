import React from 'react';
import Header from '../Header/Header';
import Row from '../Row/Row';
import SearchField from '../SearchField/SearchField';
import AddButton from '../CalendarHeaderAddButton/CalendarHeaderAddButton';

const CalendarHeader = () => (
  <Header>
    <Row
      hAlign="between"
      vAlign="center"
      wrapping="wrap"
    >
      <AddButton onAdd={() => console.log('Add')} />
      <SearchField />
    </Row>
  </Header>
);

export default CalendarHeader;
