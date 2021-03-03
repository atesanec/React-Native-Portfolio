import { AsyncStorage } from 'react-native';
import { createTransform } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reportError from './reportError';

const commonFilterTransform = createTransform(
  ({
    // persist only session state
    session,
  }) => ({ session }),
  (outboundState) => outboundState,
  { whitelist: ['common'] },
);

export default function createRootPersistConfigGlobal({ persistKey }) {
  return {
    version: 1,
    key: persistKey,
    storage: AsyncStorage,
    whitelist: ['common'],
    stateReconciler: autoMergeLevel2,
    transforms: [commonFilterTransform],
    writeFailHandler: (error) => reportError(error),
  };
}
