import React from 'react';
import Pagination from '../Pagination/Pagination';
import Container from '../Container/Container';
import * as Spacing from '../Spacing/Spacing';

const MonthToggler = ({date, onNextMonth, onPrevMonth}) => (
  <Spacing.Vertical size={Spacing.SIZE.large}>
    <Container>
      <Pagination content={date} onNext={onNextMonth} onPrev={onPrevMonth} />
    </Container>
  </Spacing.Vertical>
);

export default MonthToggler;
