import { all, takeLatest, call, put } from "redux-saga/effects";
import API_URLS from "../../constants/api/services";
import API from "../../utils/fetch";
import { GET_APPLICATION_LABELS } from "../constants";
import { GET_MOVIE } from "../../containers/molecules/ArticleWrap/ArticleWrap.constants";
import { serverActions } from "../actions";
import {
  getMovieSuccess,
  getMovieError,
} from "../../containers/molecules/ArticleWrap/ArticleWrap.actions";

export function* getApplicationLabels(actions) {
  try {
    const data = yield call(API.fetch, API_URLS.movieAPI, actions);
    yield put(serverActions.setApplicationLabels(data));
  } catch (err) {
    yield put(serverActions.setApplicationLabels({}));
  }
}

export function* loadMovieSaga(action) {
  console.log("TCL: function*loadMovieSaga -> action", action);
  const { identifier } = action;
  try {
    const data = yield call(
      API.fetch,
      `${API_URLS.experience}/${identifier}`,
      action
    );
    yield put(getMovieSuccess(data));
  } catch (err) {
    yield put(getMovieError(err));
  }
}

export default function* globalSaga() {
  yield all([takeLatest(GET_APPLICATION_LABELS, getApplicationLabels)]);
  yield all([takeLatest(GET_MOVIE, loadMovieSaga)]);
}
