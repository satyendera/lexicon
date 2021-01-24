// @flow
import { combineReducers } from 'redux';
import globalData from './globalData';
import movieReducer from '../../containers/molecules/ArticleWrap/ArticleWrap.reducer'

export default combineReducers({
  globalData,
  movieReducer
});

export const globalDataStructure = [['global', 'globalData', 'deviceType']];
