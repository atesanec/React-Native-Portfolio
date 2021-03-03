import { Response } from 'node-fetch';
import configureMockStore from '../../test/configureMockStore';
import setUserPassword from './setUserPassword';

import createErrorFromResponse from '../../common/createErrorFromResponse';
import callSdkMethod from '../common/callSdkMethod';

const mockStore = configureMockStore();

describe('setUserPassword', () => {
  afterEach(() => {
    callSdkMethod.sdk.users.setUserPassword.mockReset();
  });

  test('handles success', async () => {
    callSdkMethod.sdk.users.setUserPassword.mockReturnValue(Promise.resolve(null));

    const store = mockStore();

    await store.dispatch(
      setUserPassword({
        token: 'ZFhObGNrQm1iMjh1WW1GeToxMjM0NQ==',
        newPassword: 'randompassword',
      }),
    );

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/SET_USER_PASSWORD_REQUEST",
        },
        Object {
          "type": "user/SET_USER_PASSWORD_SUCCESS",
        },
      ]
    `);
  });

  test('handles error', async () => {
    const res = new Response('{"message":"Forbidden"}', { status: 403 });
    const error = createErrorFromResponse(res);

    callSdkMethod.sdk.users.setUserPassword.mockReturnValue(Promise.reject(error));

    const store = mockStore();
    let err;

    try {
      await store.dispatch(
        setUserPassword({
          token: 'ZFhObGNrQm1iMjh1WW1GeToxMjM0NQ==',
          newPassword: 'randompassword',
        }),
      );
    } catch (e) {
      err = e;
    }

    expect(err).toBe(error);

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/SET_USER_PASSWORD_REQUEST",
        },
        Object {
          "error": true,
          "payload": [Error: Forbidden],
          "type": "user/SET_USER_PASSWORD_FAILURE",
        },
      ]
    `);
  });
});
