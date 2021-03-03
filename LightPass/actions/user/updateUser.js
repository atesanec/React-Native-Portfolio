import { createAction } from 'redux-actions';
import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../../actionTypes/user';


import callSdkMethod from '../common/callSdkMethod';

export const updateUserRequest = createAction(UPDATE_USER_REQUEST);
export const updateUserSuccess = createAction(UPDATE_USER_SUCCESS);
export const updateUserFailure = createAction(UPDATE_USER_FAILURE);

export default function updateUser({
  id,
  displayName,
  email,
  phoneE164,
  isEmailPrivate,
  isPhonePrivate,
  isWorkspaceOwner,
  isAdmin,
  isInstaller,
} = {}) {
  return async (dispatch) => {
    dispatch(updateUserRequest());

    try {
      const res = await dispatch(
        callSdkMethod((sdk) => sdk.users.updateUser({
          id,
          displayName,
          email,
          phoneE164,
          isAdmin,
          isInstaller,
          isWorkspaceOwner,
          isEmailPrivate,
          isPhonePrivate,
        })),
      );

      dispatch(updateUserSuccess(res));

      return res;
    } catch (err) {
      dispatch(updateUserFailure(err));
      throw err;
    }
  };
}
