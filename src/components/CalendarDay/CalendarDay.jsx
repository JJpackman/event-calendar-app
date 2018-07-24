import React from 'react';
import Label, { TYPE } from '../Label/Label';

const CalendarDay = ({date, event}) => (
  <div>
    <p>{date.toDateString()}</p>
    <Label title="Participants" type={TYPE.tag} />
    <p>
      {event.participants.join(',')}
    </p>
    <Label title="Description" type={TYPE.tag} />
    <p>
      {event.description}
    </p>
  </div>
);

export default CalendarDay;
