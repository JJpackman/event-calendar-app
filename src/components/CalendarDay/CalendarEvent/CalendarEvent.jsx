import React from 'react';
import PropTypes from 'prop-types';
import * as Label from '../../common/Label/Label';
import styles from '../style.css';

const CalendarEvent = ({event}) => (
  <React.Fragment>
    <div className={styles['calendar-day__description-wrapper']}>
      <Label.Tag title="Description" />
      <p className={styles['calendar-day__description']}>
        { event.description }
      </p>
    </div>
    { event.participants &&
      <div className={styles['calendar-day__description-wrapper']}>
        <Label.Tag title="Participants" />
        <p className={styles['calendar-day__participants']}>
          { event.participants }
        </p>
      </div>
    }
  </React.Fragment>
);

CalendarEvent.propTypes = {
  event: PropTypes.shape({
    description: PropTypes.string.isRequired,
    participants: PropTypes.string
  }).isRequired
};

export default CalendarEvent;
