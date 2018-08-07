import * as t from './actionTypes';
import * as eventActions from './events';
import generateEventId from '../utils/generateEventId';

describe('event action creators', () => {
  it('addEvent() should return action with type ADD_EVENT and payload with object', () => {
    const expectedAction = {
      type: t.ADD_EVENT,
      payload: {
        description: 'Meeting',
        participants: ['Vladimir', 'Alexey']
      }
    };

    expect(eventActions.addEvent(expectedAction.payload)).toEqual(expectedAction);
  });

  it('editEvent() should return action with type EDIT_EVENT and payload with object', () => {
    const expectedAction = {
      type: t.EDIT_EVENT,
      payload: {
        description: 'Meeting',
        participants: ['Vladimir', 'Alexey']
      }
    };

    expect(eventActions.editEvent(expectedAction.payload)).toEqual(expectedAction);
  });

  it('deleteEvent() should return action with type DELETE_EVENT and payload with id', () => {
    const expectedAction = {
      type: t.DELETE_EVENT,
      payload: generateEventId(new Date)
    };

    expect(eventActions.deleteEvent(expectedAction.payload)).toEqual(expectedAction);
  });
});
