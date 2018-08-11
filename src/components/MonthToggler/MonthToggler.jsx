import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import Container from '../common/Container/Container';
import * as Spacing from '../Spacing/Spacing';
import PropTypes from 'prop-types';
import dateManager from '../../utils/dateManager';

const MonthToggler = ({date, onNextMonth, onPrevMonth}) => (
  <Spacing.Vertical size="lg">
    <Container>
      <Pagination content={`${dateManager.monthName(date)} ${date.getFullYear()}`} onNext={onNextMonth} onPrev={onPrevMonth} />
    </Container>
  </Spacing.Vertical>
);

MonthToggler.propTypes = {
  date: PropTypes.object.isRequired,
  onNextMonth: PropTypes.func.isRequired,
  onPrevMonth: PropTypes.func.isRequired
};

export default MonthToggler;
