import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CalendarMonth from '../components/CalendarMonth/CalendarMonth';
import * as eventsActions from '../actions/events';

const filterEventsByMonth = (events, date) => {
  return events.filter(event =>
    (event.date.getMonth() === date.getMonth()) &&
    (event.date.getFullYear() === date.getFullYear())
  );
};

const mapStateToProps = ({events, date}) => ({
  events: filterEventsByMonth(events.events, date.date)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(eventsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarMonth);
