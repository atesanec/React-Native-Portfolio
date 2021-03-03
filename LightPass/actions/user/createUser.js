import { createAction } from 'redux-actions';
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from '../../actionTypes/user';

import callSdkMethod from '../common/callSdkMethod';

export const createUserRequest = createAction(CREATE_USER_REQUEST);
export const createUserSuccess = createAction(CREATE_USER_SUCCESS);
export const createUserFailure = createAction(CREATE_USER_FAILURE);

export default function createUser({
  displayName,
  email,
  phone,
  isAdmin,
  isInstaller,
  isWorkspaceOwner,
}) {
  return async (dispatch) => {
    dispatch(createUserRequest());

    try {
      const res = await dispatch(
        callSdkMethod((sdk) => sdk.users.createUser({
          email,
          displayName,
          phone,
          isAdmin,
          isInstaller,
          isWorkspaceOwner,
        })),
      );

      dispatch(createUserSuccess(res));

      return res;
    } catch (err) {
      dispatch(createUserFailure(err));
      throw err;
    }
  };
}
