import { AsyncStorage } from 'react-native';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import reportError from './reportError';

export default function createCommonPersistConfig({ persistKey }) {
  return {
    version: 1,
    key: persistKey,
    storage: AsyncStorage,
    whitelist: ['session'],
    stateReconciler: autoMergeLevel1,
    writeFailHandler: (error) => reportError(error),
  };
}
