import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import configureRootReducer from './configureRootReducer';

export default function configureStore(initialState = undefined, {
  isLogged = false,
  persistKey,
}) {
  const middlewares = [thunk];
  // const enhancers = [
  //   applyMiddleware(...middlewares),
  // ];
  // // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  // /* eslint-disable no-underscore-dangle */
  // const composeEnhancers =
  //   process.env.NODE_ENV !== 'production' &&
  //   typeof window === 'object' &&
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  // /* eslint-enable */
  // a workaround until redux devtools won't work
  if (isLogged) {
    const { createLogger } = require('redux-logger'); // eslint-disable-line global-require
    const logger = createLogger();
    middlewares.push(logger);
  }

  const rootReducer = configureRootReducer({ persistKey });
  // const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers));
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

  return store;
}
