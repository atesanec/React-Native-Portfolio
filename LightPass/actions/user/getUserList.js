import { createAction } from 'redux-actions';
import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE,
} from '../../actionTypes/user';

import callSdkMethod from '../common/callSdkMethod';

export const getUserListRequest = createAction(
  GET_USER_LIST_REQUEST,
);
export const getUserListSuccess = createAction(
  GET_USER_LIST_SUCCESS,
);
export const getUserListFailure = createAction(
  GET_USER_LIST_FAILURE,
);

export default function getUsers() {
  return async (dispatch) => {
    dispatch(getUserListRequest());

    try {
      const res = await dispatch(
        callSdkMethod((sdk) => sdk.users.getUserList()),
      );

      dispatch(getUserListSuccess(res));

      return res;
    } catch (err) {
      dispatch(getUserListFailure(err));

      throw err;
    }
  };
}
