import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../actions/search';
import * as selectors from '../selectors/selectors';
import SearchBar from '../components/Header/SearchBar/SearchBar';

const mapStateToProps = state => ({
  events: selectors.getEventsByQuery(state)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(searchActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
