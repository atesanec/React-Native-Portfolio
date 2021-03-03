import { createSelector } from 'reselect';
import {
  GET_PASS_LIST_FAILURE,
  GET_PASS_LIST_SUCCESS,
  GET_PASS_LIST_REQUEST,
} from '../../actionTypes/user';
import createLoadableReducer from '../../common/createLoadableReducer';

export default createLoadableReducer({
  requestActionType: GET_PASS_LIST_REQUEST,
  successActionType: GET_PASS_LIST_SUCCESS,
  failureActionType: GET_PASS_LIST_FAILURE,
});

const getRoot = (state) => state.user.passList;

const getState = createSelector(getRoot, (state) => state.state);
const getError = createSelector(getRoot, (state) => state.error);
const getPassList = createSelector(getRoot, (state) => state.data || []);

export {
  getState,
  getError,
  getPassList,
};
