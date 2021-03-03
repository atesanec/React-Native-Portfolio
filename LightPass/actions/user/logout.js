import { getHost } from '../../reducers/common/session';
import storeService from '../../common/storeService';
import { setToken } from '../common';
// import deleteSession from '../session/deleteSession';

export default () => async (dispatch, getState) => {
  const baseUrlHost = getHost(getState());
  const baseUrl = `https://${baseUrlHost}`;

  // doesn't work
  // await dispatch(deleteSession());
  dispatch(setToken(null));
  await storeService.removeBaseUrl(baseUrl);
};
