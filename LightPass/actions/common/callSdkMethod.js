import { getHost, getToken } from '../../reducers/common/session';
import storeService from '../../common/storeService';
import logout from '../user/logout';

export default function callSdkMethod(callback) {
  return async (dispatch, getState) => {
    const baseUrlHost = getHost(getState());
    const sdk = storeService.getSdkByBaseUrl(`https://${baseUrlHost}`);
    try {
      const result = await callback(sdk);
      return result;
    } catch (e) {
      const isAuthenticationError = e && e.response && e.response.status === 401;
      const token = getToken(getState());
      // logging out only us user was logged in
      if (isAuthenticationError && token) {
        dispatch(logout());
        return undefined;
      }

      throw e;
    }
  };
}
