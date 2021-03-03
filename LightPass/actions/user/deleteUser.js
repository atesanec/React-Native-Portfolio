import { createAction } from 'redux-actions';
import {
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from '../../actionTypes/user';
import callSdkMethod from '../common/callSdkMethod';

export const deleteUserRequest = createAction(
  DELETE_USER_REQUEST,
);
export const deleteUserSuccess = createAction(
  DELETE_USER_SUCCESS,
);
export const deleteUserFailure = createAction(
  DELETE_USER_FAILURE,
);

export default function deleteUser({ id } = {}) {
  return async (dispatch) => {
    dispatch(deleteUserRequest());

    try {
      await dispatch(
        callSdkMethod((sdk) => sdk.users.deleteUser({ id })),
      );

      dispatch(deleteUserSuccess());

      return null;
    } catch (err) {
      dispatch(deleteUserFailure(err));

      throw err;
    }
  };
}
