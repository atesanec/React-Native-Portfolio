
import configureMockStore from '../../test/configureMockStore';
import deleteUser from './deleteUser';

import forbiddenError from '../common/__mocks__/forbiddenError';
import callSdkMethod from '../common/callSdkMethod';

const mockStore = configureMockStore();

describe('deleteUser', () => {
  afterEach(() => {
    callSdkMethod.sdk.users.deleteUser.mockReset();
  });

  test('handles success', async () => {
    callSdkMethod.sdk.users.deleteUser.mockReturnValue(Promise.resolve());
    const store = mockStore();

    await store.dispatch(
      deleteUser({ id: '19e83583-8668-4ca9-8ad5-d1f676585033' }),
    );

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/DELETE_USER_REQUEST",
        },
        Object {
          "type": "user/DELETE_USER_SUCCESS",
        },
      ]
    `);
  });

  test('handles error', async () => {
    callSdkMethod.sdk.users.deleteUser.mockReturnValue(Promise.reject(forbiddenError));

    const store = mockStore();
    let err;

    try {
      await store.dispatch(
        deleteUser({ id: '19e83583-8668-4ca9-8ad5-d1f676585033' }),
      );
    } catch (e) {
      err = e;
    }

    expect(err).toBe(forbiddenError);

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/DELETE_USER_REQUEST",
        },
        Object {
          "error": true,
          "payload": [Error: Forbidden],
          "type": "user/DELETE_USER_FAILURE",
        },
      ]
    `);
  });
});
