import { createSelector } from 'reselect';
import {
  GET_USER_REQUEST,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
} from '../../actionTypes/user';
import createLoadableReducer from '../../common/createLoadableReducer';
import createIndexedReducer from '../../common/createIndexedReducer';

const itemReducer = createLoadableReducer({
  requestActionType: GET_USER_REQUEST,
  successActionType: GET_USER_SUCCESS,
  failureActionType: GET_USER_FAILURE,
});

export default createIndexedReducer({
  allowedTypes: [GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE],
  itemReducer,
  itemKeyProp: 'userId',
});

export function createSelectorsByUserId(userId) {
  const getRootByKey = (state) => state.user.byId[userId] || {};
  const getState = createSelector(getRootByKey, (state) => state.state);
  const getError = createSelector(getRootByKey, (state) => state.error);
  const getUser = createSelector(getRootByKey, (state) => state.data);

  return {
    getState,
    getError,
    getUser,
  };
}
