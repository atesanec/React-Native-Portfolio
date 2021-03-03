import configureMockStore from '../../test/configureMockStore';
import resetPassword from './resetPassword';

import forbiddenError from '../common/__mocks__/forbiddenError';
import callSdkMethod from '../common/callSdkMethod';

const mockStore = configureMockStore();

describe('resetPassword', () => {
  afterEach(() => {
    callSdkMethod.sdk.users.resetPassword.mockReset();
  });

  test('handles success', async () => {
    callSdkMethod.sdk.users.resetPassword.mockReturnValue(
      Promise.resolve(null),
    );

    const store = mockStore();

    await store.dispatch(resetPassword({ email: 'root@example.com' }));

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/RESET_PASSWORD_REQUEST",
        },
        Object {
          "type": "user/RESET_PASSWORD_SUCCESS",
        },
      ]
    `);
  });

  test('handles error', async () => {
    callSdkMethod.sdk.users.resetPassword.mockReturnValue(
      Promise.reject(forbiddenError),
    );
    const store = mockStore();
    let err;

    try {
      await store.dispatch(resetPassword({ email: 'root@example.com' }));
    } catch (e) {
      err = e;
    }

    expect(err).toBe(forbiddenError);

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/RESET_PASSWORD_REQUEST",
        },
        Object {
          "error": true,
          "payload": [Error: Forbidden],
          "type": "user/RESET_PASSWORD_FAILURE",
        },
      ]
    `);
  });
});
