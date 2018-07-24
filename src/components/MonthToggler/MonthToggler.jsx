import React from 'react';
import Pagination from '../Pagination/Pagination';
import Container from '../Container/Container';
import VerticalSpacing, { SIZE } from '../VerticalSpacing/VerticalSpacing';

const MonthToggler = ({date, onNextMonth, onPrevMonth}) => (
  <VerticalSpacing size={SIZE.large}>
    <Container>
      <Pagination content={date} onNext={onNextMonth} onPrev={onPrevMonth} />
    </Container>
  </VerticalSpacing>
);

export default MonthToggler;
