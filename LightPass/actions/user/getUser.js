import { createAction } from 'redux-actions';
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from '../../actionTypes/user';

import callSdkMethod from '../common/callSdkMethod';

export const getUserRequest = createAction(GET_USER_REQUEST, null, (userId) => ({ userId }));
export const getUserSuccess = createAction(GET_USER_SUCCESS, null, (res, userId) => ({ userId }));
export const getUserFailure = createAction(GET_USER_FAILURE, null, (res, userId) => ({ userId }));

export default function getUser({ id } = {}) {
  return async (dispatch) => {
    dispatch(getUserRequest(id));
    try {
      const res = await dispatch(callSdkMethod((sdk) => sdk.users.getUser({ id })));
      dispatch(getUserSuccess(res, id));
      return res;
    } catch (err) {
      dispatch(getUserFailure(err, id));

      throw err;
    }
  };
}
