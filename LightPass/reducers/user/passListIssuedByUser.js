import { createSelector } from 'reselect';
import {
  GET_PASS_LIST_ISSUED_BY_USER_REQUEST,
  GET_PASS_LIST_ISSUED_BY_USER_SUCCESS,
  GET_PASS_LIST_ISSUED_BY_USER_FAILURE,
} from '../../actionTypes/user';
import createLoadableReducer from '../../common/createLoadableReducer';

export default createLoadableReducer({
  requestActionType: GET_PASS_LIST_ISSUED_BY_USER_REQUEST,
  successActionType: GET_PASS_LIST_ISSUED_BY_USER_SUCCESS,
  failureActionType: GET_PASS_LIST_ISSUED_BY_USER_FAILURE,
});

const getRoot = (state) => state.user.passListIssuedByUser;

const getState = createSelector(getRoot, (state) => state.state);
const getError = createSelector(getRoot, (state) => state.error);
const getPassListIssuedByUser = createSelector(getRoot, (state) => state.data || []);

export {
  getState,
  getError,
  getPassListIssuedByUser,
};
