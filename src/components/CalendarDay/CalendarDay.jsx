import React from 'react';
import styles from './CalendarDay.css';
import Label from '../Label/Label';
import Paragraph from '../Paragraph/Paragraph';
import * as Spacing from '../Spacing/Spacing';
import PropTypes from 'prop-types';

const CalendarDay = ({date, event}) => (
  <div className={styles['calendar-day']}>
    <Spacing.Vertical size="lg" direction="bottom">
      <Paragraph textAlign="center">
        <span className={styles['calendar-day__date']}>
          {date.toDateString()}
        </span>
      </Paragraph>
    </Spacing.Vertical>
    <Spacing.Vertical size="sm" direction="bottom">
      <Label title="Participants" type="tag" />
    </Spacing.Vertical>
    <Paragraph>
      {event.participants.join(', ')}
    </Paragraph>
    <Spacing.Vertical size="sm">
      <Label title="Description" type="tag" />
    </Spacing.Vertical>
    <Paragraph>
      {event.description}
    </Paragraph>
  </div>
);

CalendarDay.propTypes = {
  date: PropTypes.object.isRequired,
  event: PropTypes.shape({
    description: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string)
  })
};

export default CalendarDay;
