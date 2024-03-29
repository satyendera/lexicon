// @flow
import set from 'lodash/set';

import { LOAD_ERROR_PAGE_SUCCESS, LOAD_ERROR_PAGE_FAILURE } from './ErrorPage.constants';

export const setErrorPageData = (state, data) =>
  set(state, 'errorPageData', data);

export const layout = (state = {}, action = 'default') => {
  switch (action.type) {
    case LOAD_ERROR_PAGE_SUCCESS:
      return setErrorPageData(state, action.data);
    case LOAD_ERROR_PAGE_FAILURE:
      return setErrorPageData(state, 'Error');
    default:
      return state;
  }
};

export default layout;
