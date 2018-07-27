import React from 'react';
import CalendarDay from '../CalendarDay/CalendarDay';

const CalendarMonth = ({days}) => (
  <div>
    {
      days.map(day => {
        <CalendarDay date={day.date} event={day.event}/>
      })
    }
  </div>
);

export default CalendarMonth;
