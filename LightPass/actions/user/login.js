import { getUserSuccess } from './getUser';
import { setToken } from '../common';
import createSession from '../session/createSessionWrapper';
import { getWorkspaceSuccess } from '../workspace/getWorkspace';

export default (dispatch) => async ({ username, password }) => {
  const {
    session: { token },
    workspace,
    user,
  } = await dispatch(createSession({ username, password }));

  dispatch(setToken(token));
  dispatch(getUserSuccess(user));
  dispatch(getWorkspaceSuccess(workspace));
};
