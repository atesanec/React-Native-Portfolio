import { createSelector } from 'reselect';
import {
  GET_WEB_PASS_LIST_ISSUED_BY_USER_REQUEST,
  GET_WEB_PASS_LIST_ISSUED_BY_USER_SUCCESS,
  GET_WEB_PASS_LIST_ISSUED_BY_USER_FAILURE,
} from '../../actionTypes/user';
import createLoadableReducer from '../../common/createLoadableReducer';

export default createLoadableReducer({
  requestActionType: GET_WEB_PASS_LIST_ISSUED_BY_USER_REQUEST,
  successActionType: GET_WEB_PASS_LIST_ISSUED_BY_USER_SUCCESS,
  failureActionType: GET_WEB_PASS_LIST_ISSUED_BY_USER_FAILURE,
});

const getRoot = (state) => state.user.webPassListIssuedByUser;

const getState = createSelector(getRoot, (state) => state.state);
const getError = createSelector(getRoot, (state) => state.error);
const getWebPassListIssuedByUser = createSelector(getRoot, (state) => state.data || []);

export {
  getState,
  getError,
  getWebPassListIssuedByUser,
};
