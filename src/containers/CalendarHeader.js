import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/Header/Header';
import * as eventsActions from '../actions/events';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(eventsActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Header);
