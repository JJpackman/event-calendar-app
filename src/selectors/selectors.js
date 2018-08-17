import { createSelector } from 'reselect';
import dataManager from '../utils/dateManager';
import memoize from 'lodash.memoize'

export const getDate = state => state.date.date;
export const getEvents = state => state.events.events;
export const getQuery = state => state.search.searchQuery;

export const getEventForCurrentDate = createSelector(
  [ getEvents ],
  events => memoize(
    date => events.find(e => dataManager.compareDatesWithoutTime(e.date, date))
  )
);

export const getEventsByQuery = createSelector(
  [ getEvents, getQuery ],
  (events, query) => events.filter(event => {
    if (query !== '') {
      if (event.date.toDateString() === query || event.participants.includes(query) ||
      event.description.toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
    }

    return false;
  })
);
