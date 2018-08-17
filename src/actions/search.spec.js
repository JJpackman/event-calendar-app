import * as t from './actionTypes';
import * as searchActions from './search';

describe('search action creators', () => {
  it('setQuery() should return action with type SET_QUERY and payload with query string', () => {
    const expectedAction = {
      type: t.SET_QUERY,
      payload: 'Meeting'
    };

    expect(searchActions.setQuery(expectedAction.payload)).toEqual(expectedAction);
  });
});
