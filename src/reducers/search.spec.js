import reducer from './search';
import * as actionTypes from '../actions/actionTypes';

describe('search reducer', () => {
  it('should not affect state', () => {
    const initialState = {
      searchQuery: 'Birthday'
    };

    const nonExistentAction = {
      type: 'NON_EXISTENT'
    };

    expect(reducer(initialState, nonExistentAction)).toEqual(initialState);
  });

  it('should handle SET_QUERY', () => {
    const initialState = {
      searchQuery: ''
    };

    const setQuery = {
      type: actionTypes.SET_QUERY,
      payload: 'Meeting'
    };

    expect(reducer(initialState, setQuery)).toEqual({
      searchQuery: setQuery.payload
    });
  });
});
