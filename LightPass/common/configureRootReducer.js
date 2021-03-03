import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import * as reducers from '../reducers';
import createRootPersistConfig from './createRootPersistConfig';
import createCommonPersistConfig from './createCommonPersistConfig';
import createPassPersistConfig from '../pass/createPassPersistConfig';

export default function configureRootReducer({ persistKey }) {
  let commonReducer = reducers.common;
  let passReducer = reducers.pass;
  if (persistKey) {
    const commonPersistKey = `${persistKey}.common`;
    commonReducer = persistReducer(
      createCommonPersistConfig({ persistKey: commonPersistKey }),
      commonReducer,
    );
    const passPersistKey = `${persistKey}.pass`;
    passReducer = persistReducer(
      createPassPersistConfig({ persistKey: passPersistKey }),
      passReducer,
    );
  }

  let rootReducer = combineReducers({
    ...reducers,
    common: commonReducer,
    pass: passReducer,
  });
  if (persistKey) {
    rootReducer = persistReducer(createRootPersistConfig({ persistKey }), rootReducer);
  }

  return rootReducer;
}
