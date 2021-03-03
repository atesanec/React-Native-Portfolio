import { updateIn } from 'immutable';
import { combineActions, handleAction } from 'redux-actions';

export default function createIndexedReducer({
  allowedTypes,
  itemReducer,
  itemKeyProp,
}) {
  const initialState = {};

  return handleAction(
    combineActions(...allowedTypes),
    (state, action) => {
      const key = action.meta[itemKeyProp];

      return updateIn(state, Array.isArray(key)
        ? key
        : [key], (item) => itemReducer(item, action));
    },
    initialState,
  );
}
