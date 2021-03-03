import { getHost } from '../../reducers/common/session';
import storeService from '../../common/storeService';

export default function callSdkMethodBatch(callbacks) {
  return async (dispatch, getState) => {
    const baseUrlHost = getHost(getState());
    const sdk = storeService.getSdkByBaseUrl(`https://${baseUrlHost}`);
    return Promise.all(callbacks.map((callback) => callback(sdk)));
  };
}
