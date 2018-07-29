import React from 'react';
import Container from '../Container/Container';
import Row from '../Row/Row';
import CalendarDayWithPopup from '../CalendarDayWithPopup/CalendarDayWithPopup';
import CalendarDay from '../CalendarDay/CalendarDay';
import EventFormLong from '../EventFormLong/EventFormLong';

const CalendarMonth = ({days}) => (
  <Container>
    <Row wrapping="wrap" hAlign="start">
      {
        days.map((day, index) => (
          <CalendarDayWithPopup key={index}
            day={
              <CalendarDay
                date={day.date}
                event={day.event}
              />
            }
            popupContent={
              <EventFormLong
                onAdd={() => console.log('Add')}
                onDelete={() => console.log('Delete')}
              />
            }
          />
        ))
      }
    </Row>
  </Container>
);

export default CalendarMonth;
