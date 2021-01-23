// @flow
import {
  LOAD_HOME_FAILURE,
  LOAD_HOME_SEO,
  LOAD_HOME_SEO_SUCCESS,
  LOAD_HOME_EDITORIAL_DATA,
  LOAD_HOME_EDITORIAL_DATA_SUCCESS,
} from './HomePage.constants';


export const loadHomeFailure = (error) => ({
  type: LOAD_HOME_FAILURE,
  error,
});

export const loadHomeSeo = () => ({ type: LOAD_HOME_SEO });

export const loadHomeSeoSuccess = (data) => ({
  type: LOAD_HOME_SEO_SUCCESS,
  data,
});

export const loadHomePageEditorial = () => ({
  type: LOAD_HOME_EDITORIAL_DATA,
  slotId: 'homePageSlot',
});

export const loadHomePageEditorialSuccess = (data) => ({
  type: LOAD_HOME_EDITORIAL_DATA_SUCCESS,
  data,
});

export default [loadHomeSeo, loadHomePageEditorial];
