import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventsActions from '../actions/events';
import * as selectors from '../selectors/selectors';
import HeaderEventForm from '../components/Header/HeaderEventForm/HeaderEventForm';

const mapStateToProps = state => ({
  getEventForCurrentDate: selectors.getEventForCurrentDate(state)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(eventsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderEventForm);
