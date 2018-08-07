import * as t from './actionTypes';

export const addEvent = event => ({
  type: t.ADD_EVENT,
  payload: event
});

export const editEvent = event => ({
  type: t.EDIT_EVENT,
  payload: event
});

export const deleteEvent = id => ({
  type: t.DELETE_EVENT,
  payload: id
});
