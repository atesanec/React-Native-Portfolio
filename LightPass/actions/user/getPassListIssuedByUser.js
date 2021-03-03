import { createAction } from 'redux-actions';
import {
  GET_PASS_LIST_ISSUED_BY_USER_REQUEST,
  GET_PASS_LIST_ISSUED_BY_USER_SUCCESS,
  GET_PASS_LIST_ISSUED_BY_USER_FAILURE,
} from '../../actionTypes/user';
import callSdkMethod from '../common/callSdkMethod';

export const getPassListIssuedByUserRequest = createAction(GET_PASS_LIST_ISSUED_BY_USER_REQUEST);
export const getPassListIssuedByUserSuccess = createAction(GET_PASS_LIST_ISSUED_BY_USER_SUCCESS);
export const getPassListIssuedByUserFailure = createAction(GET_PASS_LIST_ISSUED_BY_USER_FAILURE);

export default function getPassListIssuedByUser({ id } = {}) {
  return async (dispatch) => {
    dispatch(getPassListIssuedByUserRequest());

    try {
      const res = await dispatch(
        callSdkMethod((sdk) => sdk.users.getPassesIssuedByUser({ id })),
      );

      dispatch(getPassListIssuedByUserSuccess(res));

      return res;
    } catch (err) {
      dispatch(getPassListIssuedByUserFailure(err));
      throw err;
    }
  };
}
