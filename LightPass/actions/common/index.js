import { createAction } from 'redux-actions';
import {
  SET_TOKEN,
  SET_BASE_URL,
  SET_HOST,
} from '../../actionTypes/common';

export const setToken = createAction(SET_TOKEN);

export const setBaseUrl = createAction(SET_BASE_URL);

export const setHost = createAction(SET_HOST);
