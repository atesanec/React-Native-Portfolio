import configureMockStore from '../../test/configureMockStore';
import getUser from './getUser';

import forbiddenError from '../common/__mocks__/forbiddenError';
import callSdkMethod from '../common/callSdkMethod';

const mockStore = configureMockStore();

describe('getUser', () => {
  afterEach(() => {
    callSdkMethod.sdk.users.getUser.mockReset();
  });

  test('handles success', async () => {
    callSdkMethod.sdk.users.getUser.mockReturnValue(
      Promise.resolve(
        JSON.parse(`{
          "id": "19e83583-8668-4ca9-8ad5-d1f676585033",
          "workspace": "ce23b832-083e-4a52-b501-a3893e352c43",
          "email": "user_2@example.org",
          "displayName": "User 2",
          "phoneE164": "+33222222222",
          "isEmailPrivate": false,
          "isPhonePrivate": true,
          "isAdmin": false,
          "isInstaller": false,
          "isWorkspaceOwner": false,
          "isRoot": false
      }`),
      ),
    );
    const store = mockStore();

    await store.dispatch(getUser());

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "meta": Object {
            "userId": undefined,
          },
          "type": "user/GET_USER_REQUEST",
        },
        Object {
          "meta": Object {
            "userId": undefined,
          },
          "payload": Object {
            "displayName": "User 2",
            "email": "user_2@example.org",
            "id": "19e83583-8668-4ca9-8ad5-d1f676585033",
            "isAdmin": false,
            "isEmailPrivate": false,
            "isInstaller": false,
            "isPhonePrivate": true,
            "isRoot": false,
            "isWorkspaceOwner": false,
            "phoneE164": "+33222222222",
            "workspace": "ce23b832-083e-4a52-b501-a3893e352c43",
          },
          "type": "user/GET_USER_SUCCESS",
        },
      ]
    `);
  });

  test('handles error', async () => {
    callSdkMethod.sdk.users.getUser.mockReturnValue(
      Promise.reject(forbiddenError),
    );

    const store = mockStore();
    let err;

    try {
      await store.dispatch(getUser());
    } catch (e) {
      err = e;
    }

    expect(err).toBe(forbiddenError);

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "meta": Object {
            "userId": undefined,
          },
          "type": "user/GET_USER_REQUEST",
        },
        Object {
          "error": true,
          "meta": Object {
            "userId": undefined,
          },
          "payload": [Error: Forbidden],
          "type": "user/GET_USER_FAILURE",
        },
      ]
    `);
  });
});
