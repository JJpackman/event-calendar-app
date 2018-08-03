import React from 'react';
import Pagination from '../Pagination/Pagination';
import Container from '../Container/Container';
import * as Spacing from '../Spacing/Spacing';
import PropTypes from 'prop-types';

const MonthToggler = ({date, onNextMonth, onPrevMonth}) => (
  <Spacing.Vertical size="lg">
    <Container>
      <Pagination content={date.toDateString()} onNext={onNextMonth} onPrev={onPrevMonth} />
    </Container>
  </Spacing.Vertical>
);

MonthToggler.propTypes = {
  date: PropTypes.object.isRequired,
  onNextMonth: PropTypes.func.isRequired,
  onPrevMonth: PropTypes.func.isRequired
};

export default MonthToggler;
