// @flow
import { combineReducers } from 'redux';
import set from 'lodash/set';
import get from 'lodash/get';


import {
  LOAD_HOME_FAILURE,
  LOAD_HOME_SEO_SUCCESS,
  LOAD_HOME_EDITORIAL_DATA_SUCCESS,
} from './HomePage.constants';

export const getFailure = (state, error) =>
  set(state, 'error', error);

export const addLayoutData = (state, data) =>
  set(state, 'seoData', data);

export const addHomeEditorialData = (
  state,
  data
) => set(state, 'editorialData', data);

export const layout = (state = {}, action) => {
  switch (action.type) {
    case LOAD_HOME_FAILURE:
      return getFailure(state, get(action, 'error'));
    case LOAD_HOME_SEO_SUCCESS:
      return addLayoutData(state, get(action, 'data'));
    case LOAD_HOME_EDITORIAL_DATA_SUCCESS:
      return addHomeEditorialData(state, get(action, 'data'));
    default:
      return state;
  }
};

export default combineReducers({
  layout,
});
