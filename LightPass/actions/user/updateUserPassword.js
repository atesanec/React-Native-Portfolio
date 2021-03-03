import { createAction } from 'redux-actions';
import {
  UPDATE_USER_PASSWORD_REQUEST,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILURE,
} from '../../actionTypes/user';
import callSdkMethod from '../common/callSdkMethod';


export const updateUserPasswordRequest = createAction(
  UPDATE_USER_PASSWORD_REQUEST,
);
export const updateUserPasswordSuccess = createAction(
  UPDATE_USER_PASSWORD_SUCCESS,
);
export const updateUserPasswordFailure = createAction(
  UPDATE_USER_PASSWORD_FAILURE,
);

export default function updateUserPassword({
  id,
  oldPassword,
  newPassword,
} = {}) {
  return async (dispatch) => {
    dispatch(updateUserPasswordRequest());

    try {
      const res = await dispatch(
        callSdkMethod((sdk) => sdk.users.updateUserPassword({
          id, new_password: newPassword, old_password: oldPassword,
        })),
      );

      dispatch(updateUserPasswordSuccess(res));

      return res;
    } catch (err) {
      dispatch(updateUserPasswordFailure(err));
      throw err;
    }
  };
}
