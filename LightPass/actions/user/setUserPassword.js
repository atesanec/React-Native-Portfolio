import { createAction } from 'redux-actions';
import {
  SET_USER_PASSWORD_REQUEST,
  SET_USER_PASSWORD_SUCCESS,
  SET_USER_PASSWORD_FAILURE,
} from '../../actionTypes/user';
import callSdkMethod from '../common/callSdkMethod';

export const setUserPasswordRequest = createAction(SET_USER_PASSWORD_REQUEST);
export const setUserPasswordSuccess = createAction(SET_USER_PASSWORD_SUCCESS);
export const setUserPasswordFailure = createAction(SET_USER_PASSWORD_FAILURE);

export default function setUserPassword({ token, newPassword }) {
  return async (dispatch) => {
    dispatch(setUserPasswordRequest());
    try {
      await dispatch(
        callSdkMethod(async (sdk) => {
          // eslint-disable-next-line no-param-reassign
          sdk.token = token;
          await sdk.users.setUserPassword({ newPassword });
        }),
      );

      dispatch(setUserPasswordSuccess());

      return null;
    } catch (err) {
      dispatch(setUserPasswordFailure(err));
      throw err;
    }
  };
}
