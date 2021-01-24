import set from 'lodash/set';
import {
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
} from './ArticleWrap.constants';

const initialState = {
  isFetching: false,
};

export const movieReducer = (state = initialState, { type, identifier, data, error }) => {
  switch (type) {
    case GET_MOVIE:
      return set(state, 'isFetching', true);
    case GET_MOVIE_SUCCESS:
      return set(state, `${identifier}.data`, data);
    case GET_MOVIE_FAILURE:
      return set(state, `${identifier}.error`, error);
    default:
      return state;
  }
};

export default movieReducer;
