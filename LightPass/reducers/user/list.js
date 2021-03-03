                                                                                                                                                                                                     import { createSelector } from 'reselect';
import {
  GET_USER_LIST_FAILURE,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_REQUEST,
} from '../../actionTypes/user';
import createLoadableReducer from '../../common/createLoadableReducer';

export default createLoadableReducer({
  requestActionType: GET_USER_LIST_REQUEST,
  successActionType: GET_USER_LIST_SUCCESS,
  failureActionType: GET_USER_LIST_FAILURE,
});

const getRoot = (state) => state.user.list;

const getState = createSelector(getRoot, (state) => state.state);
const getError = createSelector(getRoot, (state) => state.error);
const getUsers = createSelector(getRoot, (state) => state.data);

export {
  getState,
  getError,
  getUsers,
};
