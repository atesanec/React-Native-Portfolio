import { createAction } from 'redux-actions';
import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from '../../actionTypes/user';
import callSdkMethod from '../common/callSdkMethod';

export const resetPasswordRequest = createAction(RESET_PASSWORD_REQUEST);
export const resetPasswordSuccess = createAction(RESET_PASSWORD_SUCCESS);
export const resetPasswordFailure = createAction(RESET_PASSWORD_FAILURE);

export default function resetPassword({ email }) {
  return async (dispatch) => {
    const data = { email };

    dispatch(resetPasswordRequest());

    try {
      await dispatch(
        callSdkMethod((sdk) => sdk.users.resetPassword(data)),
      );

      dispatch(resetPasswordSuccess());

      return null;
    } catch (err) {
      dispatch(resetPasswordFailure(err));
      throw err;
    }
  };
}
