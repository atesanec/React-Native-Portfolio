import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { connectRouter } from 'connected-react-router';
import * as reducers from '../reducersGlobal';
import createRootPersistConfigGlobal from './createRootPersistConfigGlobal';

export default function configureRootReducerGlobal({ history, persistKey }) {
  let rootReducer = combineReducers({
    ...history ? {
      router: connectRouter(history),
    } : {},
    ...reducers,
  });
  if (persistKey) {
    rootReducer = persistReducer(createRootPersistConfigGlobal({ persistKey }), rootReducer);
  }

  return rootReducer;
}
