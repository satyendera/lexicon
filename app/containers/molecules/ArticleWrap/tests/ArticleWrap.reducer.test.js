import { movieReducer} from '../ArticleWrap.reducer';
import {
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
} from '../ArticleWrap.constants';

const state = {};

describe('Movie Reducer functions', () => {
  test('calls Failure', () => {
    const action = { type: GET_MOVIE_FAILURE, error: 'new Error' };
    const newState = movieReducer(state, action.error);
    expect(newState.error).toEqual(action.error);
  });

  test('calls addLayoutData', () => {
    const action = { type: GET_MOVIE_SUCCESS, data: 'Some object' };
    const newState = movieReducer(state, action.data);
    expect(newState.seoData).toEqual(action.data);
  });

  test('calls addHomeEditorialData', () => {
    const action = { type: GET_MOVIE, data: { content: 'fetching' } };
    const newState = movieReducer(state, action.data);
    expect(newState.editorialData).toEqual({ content: 'fetching' });
  });
});


