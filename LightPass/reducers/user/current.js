import { createSelector } from 'reselect';
import {
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_REQUEST,
} from '../../actionTypes/user';
import createLoadableReducer from '../../common/createLoadableReducer';

export default createLoadableReducer({
  requestActionType: GET_USER_REQUEST,
  successActionType: GET_USER_SUCCESS,
  failureActionType: GET_USER_FAILURE,
});

const getRoot = (state) => state.user.current;

const getState = createSelector(getRoot, (state) => state.state);
const getError = createSelector(getRoot, (state) => state.error);
const getUser = createSelector(getRoot, (state) => state.data);

export {
  getState,
  getError,
  getUser,
};
