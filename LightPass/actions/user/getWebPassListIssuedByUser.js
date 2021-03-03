import { createAction } from 'redux-actions';
import {
  GET_WEB_PASS_LIST_ISSUED_BY_USER_REQUEST,
  GET_WEB_PASS_LIST_ISSUED_BY_USER_SUCCESS,
  GET_WEB_PASS_LIST_ISSUED_BY_USER_FAILURE,
} from '../../actionTypes/user';
import callSdkMethod from '../common/callSdkMethod';

/* eslint-disable max-len */
export const getWebPassListIssuedByUserRequest = createAction(GET_WEB_PASS_LIST_ISSUED_BY_USER_REQUEST);
export const getWebPassListIssuedByUserSuccess = createAction(GET_WEB_PASS_LIST_ISSUED_BY_USER_SUCCESS);
export const getWebPassListIssuedByUserFailure = createAction(GET_WEB_PASS_LIST_ISSUED_BY_USER_FAILURE);
/* eslint-enable max-len */

export default function getWebPassListIssuedByUser({ id } = {}) {
  return async (dispatch) => {
    dispatch(getWebPassListIssuedByUserRequest());

    try {
      const res = await dispatch(
        callSdkMethod((sdk) => sdk.users.getWebPassesIssuedByUser({ id })),
      );

      dispatch(getWebPassListIssuedByUserSuccess(res));

      return res;
    } catch (err) {
      dispatch(getWebPassListIssuedByUserFailure(err));
      throw err;
    }
  };
}
