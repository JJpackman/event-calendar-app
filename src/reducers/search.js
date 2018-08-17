import * as t from '../actions/actionTypes';

const initialState = {
  searchQuery: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    default:
      return state;
  }
};
