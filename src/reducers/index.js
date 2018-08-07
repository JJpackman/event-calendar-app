import {combineReducers} from 'redux';
import date from './date';
import events from './events';

export default combineReducers({
  date, events
});
