import React from 'react';
import styles from './CalendarDay.css';
import Label, { TYPE } from '../Label/Label';
import Paragraph, { TEXT_ALIGN } from '../Paragraph/Paragraph';
import * as Spacing from '../Spacing/Spacing';

const CalendarDay = ({date, event}) => (
  <div className={styles['calendar-day']}>
    <Spacing.Vertical size={Spacing.SIZE.large} direction="bottom">
      <Paragraph textAlign={TEXT_ALIGN.center}>
        <span className={styles['calendar-day__date']}>{date.toDateString()}</span>
      </Paragraph>
    </Spacing.Vertical>
    <Spacing.Vertical size={Spacing.SIZE.small} direction="bottom">
      <Label title="Participants" type={TYPE.tag} />
    </Spacing.Vertical>
    <Paragraph>
      {event.participants.join(', ')}
    </Paragraph>
    <Spacing.Vertical size={Spacing.SIZE.small}>
      <Label title="Description" type={TYPE.tag} />
    </Spacing.Vertical>
    <Paragraph>
      {event.description}
    </Paragraph>
  </div>
);

export default CalendarDay;
