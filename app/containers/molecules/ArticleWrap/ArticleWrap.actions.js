import {
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,

} from './ArticleWrap.constants';

export const getMovie = identifier => {
  return {
    type: GET_MOVIE,
    identifier,
  };
};

export const getMovieSuccess = (identifier, data) => ({
  type: GET_MOVIE_SUCCESS,
  identifier,
  data,
});

export const getMovieError = error => ({
  type: GET_MOVIE_FAILURE,
  error,
});



export default [getMovie];
