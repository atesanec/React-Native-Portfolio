import storeService from './storeService';
import { showSnackBar } from '../actionsGlobal/common';

export default function displayMessage(message, variant) {
  storeService.globalStore.dispatch(showSnackBar({ message, variant }));
}
