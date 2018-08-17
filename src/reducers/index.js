import {combineReducers} from 'redux';
import date from './date';
import events from './events';
import search from './search';

export default combineReducers({
  date, events, search
});
