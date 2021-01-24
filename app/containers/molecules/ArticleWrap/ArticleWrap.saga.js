import { put, takeLatest, call } from 'redux-saga/effects';
import { getMovieSuccess, getMovieError } from './ArticleWrap.actions';
import { GET_MOVIE } from './ArticleWrap.constants';
import API_URLS from '../../../constants/api/services';
import API from '../../../utils/fetch';

export function* loadMovieSaga(action) {
  console.log('TCL: function*loadMovieSaga -> action', action);
  try {
    const data = yield call(API.fetch, `${API_URLS.experience}/3`, action, {
      params: {
        identifier: action.identifier,
      },
    });
    yield put(getMovieSuccess(data));
  } catch (err) {
    yield put(getMovieError(err));
  }
}

export default function* ArticleWrapSaga() {
  yield takeLatest(GET_MOVIE, loadMovieSaga);
}
