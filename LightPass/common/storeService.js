import * as url from 'url';
import { persistStore } from 'redux-persist';
import SDK from '@dac/light-api-sdk';
import { getBaseUrls } from '../reducersGlobal/common/session';
import { setBaseUrl, setHost } from '../actions/common';
import {
  addBaseUrl,
  setCurrentBaseUrl,
  removeBaseUrl,
  setIsReady,
} from '../actionsGlobal/common';
import config from '../config';
import configureStore from './configureStore';
import { getToken } from '../reducers/common/session';
import reportError from './reportError';

class StoreService {
  static async createPersistor(store) {
    // awaiting for migrations to be executed before rendering or any other store data operations
    let persistor;
    await new Promise((resolve) => {
      persistor = persistStore(store, undefined, () => resolve());
      // persistor = persistStore(store, undefined, () => resolve()).purge();
    });

    return persistor;
  }

  getStoreByBaseUrl(baseUrl) {
    const map = this.mapByBaseUrl[baseUrl];

    return map ? map.store : this.emptyStore;
  }

  getSdkByBaseUrl(baseUrl) {
    const sdk = this.mapSdkByBaseUrl[baseUrl];
    // we return always a new SDK as it's stateful
    return sdk || new SDK({
      baseUrl,
      debugMode: config.api.debug,
    });
  }

  async init(store) {
    this.globalStore = store;
    this.globalPersistor = await StoreService.createPersistor(store);
    this.mapByBaseUrl = {};
    this.mapSdkByBaseUrl = {};
    this.emptyStore = configureStore(undefined, {
      isLogged: config.common.storeLoggerEnabled,
    });

    const baseUrls = getBaseUrls(this.globalStore.getState());
    for (let i = 0; i < baseUrls.length; i += 1) {
      const baseUrl = baseUrls[i];
      // eslint-disable-next-line no-await-in-loop
      await this.loadBaseUrl(baseUrl);
    }

    this.globalStore.dispatch(setIsReady(true));
  }

  async loadBaseUrl(baseUrl) {
    const store = configureStore(undefined, {
      isLogged: config.common.storeLoggerEnabled,
      persistKey: `lightpassv3.state.local_${baseUrl}`,
    });
    const { hostname: baseUrlHost } = url.parse(baseUrl);
    store.dispatch(setBaseUrl(config.api.baseUrl));
    store.dispatch(setHost(baseUrlHost));

    const persistor = await StoreService.createPersistor(store);
    this.mapByBaseUrl[baseUrl] = { store, persistor };

    const sdk = new SDK({
      baseUrl,
      debugMode: config.api.debug,
      token: getToken(store.getState()) || undefined,
    });
    this.mapSdkByBaseUrl[baseUrl] = sdk;
  }

  async addBaseUrl(baseUrl) {
    await this.loadBaseUrl(baseUrl);

    await this.globalStore.dispatch(addBaseUrl(baseUrl));
    await this.globalStore.dispatch(setCurrentBaseUrl(baseUrl));
  }

  async removeBaseUrl(baseUrl) {
    const storePersistorByBaseUrl = this.mapByBaseUrl[baseUrl];
    if (!storePersistorByBaseUrl) { return; }

    const { persistor } = storePersistorByBaseUrl;

    this.globalStore.dispatch(removeBaseUrl(baseUrl));
    try {
      await persistor.purge();
    } catch (e) {
      reportError(e);
    }

    delete this.mapByBaseUrl[baseUrl];
    delete this.mapSdkByBaseUrl[baseUrl];
  }
}

export default new StoreService();
