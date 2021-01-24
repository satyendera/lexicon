import {
  
  getMovie,
  getMovieSuccess,
  getMovieError,
  
} from '../ArticleWrap.actions';
import {
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
} from '../ArticleWrap.constants';

describe('Get Movie Actions', () => {
  test('calls Failure', () => {
    const error = {};
    const expectedAction = {
      type: GET_MOVIE_FAILURE,
      error,
    };
    expect(getMovieError(error)).toEqual(expectedAction);
  });

  test('calls GET_MOVIE_FAILURE Failure', () => {
    const error = {};
    const expectedAction = {
      type: GET_MOVIE_FAILURE,
      error,
    };
    expect(getMovieError(error)).toEqual(expectedAction);
  });

  test('calls Get movie', () => {
    const expectedAction = {
      type: GET_MOVIE,
      identifier,
    };
    expect(getMovie(identifier)).toEqual(expectedAction);
  });

  test('calls HomePageLayoutSuccess', () => {
    const data = {};
    const expectedAction = {
      type: GET_MOVIE_SUCCESS,
      data,
    };
    expect(getMovieSuccess(data)).toEqual(expectedAction);
  });

  
});
