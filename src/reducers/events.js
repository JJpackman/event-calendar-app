import * as t from '../actions/actionTypes';

const initialState = {
  events: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_EVENT:
      return {
        events: [
          ...state.events,
          action.payload
        ]
      };
    case t.EDIT_EVENT: {
      const editedIndex = state.events.findIndex(e => e.id === action.payload.id);
      state.events.splice(editedIndex, 1, action.payload)

      return {
        events: [
          ...state.events
        ]
      };
    }
    case t.DELETE_EVENT: {
      return {
        events: [
          ...state.events.filter(e => e.id !== action.payload)
        ]
      };
    }
    default:
      return state;
  }
};
