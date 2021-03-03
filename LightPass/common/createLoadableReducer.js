import { handleActions } from 'redux-actions';

const initialState = {
  state: null, // 'loading', 'error', 'loaded'
  error: null,
  data: null,
};

export default function createLoadableReducer({
  requestActionType,
  successActionType,
  failureActionType,
}) {
  const localInitialState = { ...initialState };

  return handleActions({
    [requestActionType]: (state) => ({
      ...state,
      state: 'loading',
      error: null,
    }),
    [successActionType]: (state, { payload }) => ({ ...state, state: 'loaded', data: payload }),
    [failureActionType]: (state, { payload }) => ({ ...state, state: 'error', error: payload }),
  }, localInitialState);
}
