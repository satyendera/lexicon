// @flow
import {
  DEVICE_TYPE,
  CURRENT_ROUTE,
  IS_TABLET,
  PAGE_URL,
  PAGE_QUERY,
  PAGE_ORIGIN,
  GET_APPLICATION_LABELS,
  GET_APPLICATION_LABELS_SUCCESS,
} from '../constants';

// Page-level actions go here
export const pageActions = [];

const getLabels = () => ({ type: GET_APPLICATION_LABELS });

// All default actions go here
export default [getLabels];

export const serverActions = {
  addDeviceType: (deviceType) => ({ type: DEVICE_TYPE, deviceType }),
  addIsTablet: (isTablet) => ({ type: IS_TABLET, isTablet }),
  setCurrentRoute: (pathname) => ({ type: CURRENT_ROUTE, pathname }),
  setPageUrl: (pageUrl) => ({ type: PAGE_URL, pageUrl }),
  setPageQuery: (pageQuery) => ({ type: PAGE_QUERY, pageQuery }),
  setPageOrigin: (origin) => ({ type: PAGE_ORIGIN, origin }),
  setApplicationLabels: (labels) => ({
    type: GET_APPLICATION_LABELS_SUCCESS,
    data: labels,
  }),
};
