import * as actionTypes from '../actions/actionTypes';
import reducer from './events';
import generateEventId from '../utils/generateEventId';

describe('Events reducer', () => {
  it('should not affect state', () => {
    const initialState = {
      events: []
    };

    const nonExistentAction = {
      type: 'NON_EXISTENT'
    };

    expect(reducer(initialState, nonExistentAction)).toEqual(initialState);
  });

  it('should handle addEvent()', () => {
    const initialState = {
      events: []
    };

    const currDate = new Date();

    const addAction = {
      type: actionTypes.ADD_EVENT,
      payload: {
        id: generateEventId(currDate),
        description: 'Birthday',
        participants: ['John', 'Ann']
      }
    };

    expect(reducer(initialState, addAction)).toEqual({
      events: [
        addAction.payload
      ]
    });
  });

  it('should handle editEvent()', () => {
    const editedId = generateEventId(new Date());

    const initialState = {
      events: [
        {
          id: editedId,
          description: 'Birthday',
          participants: ['John', 'Ann']
        },
        {
          id: generateEventId(new Date()),
          description: 'Party',
          participants: ['Mike', 'Elizabeth']
        }
      ]
    };

    const editAction = {
      type: actionTypes.EDIT_EVENT,
      payload: {
        id: editedId,
        description: 'Business Trip',
        participants: ['Oskar', 'Ann']
      }
    };

    expect(reducer(initialState, editAction)).toEqual({
      events: [
        editAction.payload,
        initialState.events[1]
      ]
    });
  });

  it('should handle deleteEvent()', () => {
    const deleteId = generateEventId(new Date());

    const initialState = {
      events: [
        {
          id: deleteId,
          description: 'Birthday',
          participants: ['John', 'Ann']
        },
        {
          id: generateEventId(new Date()),
          description: 'Party',
          participants: ['Mike', 'Elizabeth']
        }
      ]
    };

    const deleteAction = {
      type: actionTypes.DELETE_EVENT,
      payload: deleteId
    };

    expect(reducer(initialState, deleteAction)).toEqual({
      events: [
        initialState.events[1]
      ]
    });
  });
});
