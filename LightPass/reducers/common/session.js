import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import {
  SET_TOKEN,
  SET_BASE_URL,
  SET_HOST,
} from '../../actionTypes/common';

const initialState = {
  token: null,
  baseUrl: null,
  host: null,
};

export default handleActions({
  [SET_TOKEN]: (state, { payload }) => ({ ...state, token: payload }),
  [SET_BASE_URL]: (state, { payload }) => ({ ...state, baseUrl: payload }),
  [SET_HOST]: (state, { payload }) => ({ ...state, host: payload }),
}, initialState);

const getRoot = (state) => state.common.session;
export const getToken = createSelector(getRoot, (state) => state.token);
export const getIsLoggedIn = createSelector(getToken, (token) => !!token);
export const getBaseUrl = createSelector(getRoot, (state) => state.baseUrl);
export const getHost = createSelector(getRoot, (state) => state.host);
