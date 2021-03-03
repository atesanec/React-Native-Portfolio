import { createAction } from 'redux-actions';
import {
  GET_PASS_LIST_REQUEST,
  GET_PASS_LIST_SUCCESS,
  GET_PASS_LIST_FAILURE,
} from '../../actionTypes/user';
import callSdkMethod from '../common/callSdkMethod';

export const getPassListRequest = createAction(GET_PASS_LIST_REQUEST);
export const getPassListSuccess = createAction(GET_PASS_LIST_SUCCESS);
export const getPassListFailure = createAction(GET_PASS_LIST_FAILURE);

export default function getPassList({ id } = {}) {
  return async (dispatch) => {
    dispatch(getPassListRequest());

    try {
      const res = await dispatch(
        callSdkMethod((sdk) => sdk.users.getPassList({ id })),
      );

      dispatch(getPassListSuccess(res));

      return res;
    } catch (err) {
      dispatch(getPassListFailure(err));
      throw err;
    }
  };
}
