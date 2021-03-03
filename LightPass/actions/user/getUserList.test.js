import configureMockStore from '../../test/configureMockStore';
import getUserList from './getUserList';

import callSdkMethod from '../common/callSdkMethod';
import forbiddenError from '../common/__mocks__/forbiddenError';

const mockStore = configureMockStore();

describe('getUserList', () => {
  afterEach(() => {
    callSdkMethod.sdk.users.getUserList.mockReset();
  });

  test('handles success', async () => {
    callSdkMethod.sdk.users.getUserList.mockReturnValue(
      Promise.resolve(
        JSON.parse(`[{
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
      }]`),
      ),
    );
    const store = mockStore();

    await store.dispatch(getUserList());

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/GET_USER_LIST_REQUEST",
        },
        Object {
          "payload": Array [
            Object {
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
          ],
          "type": "user/GET_USER_LIST_SUCCESS",
        },
      ]
    `);
  });

  test('handles error', async () => {
    callSdkMethod.sdk.users.getUserList.mockReturnValue(
      Promise.reject(forbiddenError),
    );

    const store = mockStore();
    let err;

    try {
      await store.dispatch(getUserList());
    } catch (e) {
      err = e;
    }

    expect(err).toBe(forbiddenError);

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/GET_USER_LIST_REQUEST",
        },
        Object {
          "error": true,
          "payload": [Error: Forbidden],
          "type": "user/GET_USER_LIST_FAILURE",
        },
      ]
    `);
  });
});
