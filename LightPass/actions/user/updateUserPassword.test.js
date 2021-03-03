import configureMockStore from '../../test/configureMockStore';
import updateUserPassword from './updateUserPassword';

import forbiddenError from '../common/__mocks__/forbiddenError';
import callSdkMethod from '../common/callSdkMethod';

const mockStore = configureMockStore();

describe('updateUserPassword', () => {
  afterEach(() => {
    callSdkMethod.sdk.users.updateUserPassword.mockReset();
  });

  test('handles success', async () => {
    callSdkMethod.sdk.users.updateUserPassword.mockReturnValue(
      Promise.resolve(
        JSON.parse(`{
        "id": "21cfa508-5cfc-40bb-80d5-ee98d7c844dc",
        "user": "19e83583-8668-4ca9-8ad5-d1f676585033",
        "workspace": "ce23b832-083e-4a52-b501-a3893e352c43",
        "token": "l2y_su7_Lydbp0JqfapG2TFew12DWbxS_KEd3V2AF8M",
        "accountActivation": false,
        "client": {
          "deviceDescription": "testing device",
          "id": "e348522d-9448-4288-a0db-499e3b72578a",
          "identifier": "dac_api_client",
          "kind": "ios",
          "notificationToken": null,
          "version": [1,2,3]
        }
      }`),
      ),
    );

    const store = mockStore();

    await store.dispatch(
      updateUserPassword({
        oldPassword: 'randompassword',
        newPassword: 'randompassword1',
      }),
    );

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/UPDATE_USER_PASSWORD_REQUEST",
        },
        Object {
          "payload": Object {
            "accountActivation": false,
            "client": Object {
              "deviceDescription": "testing device",
              "id": "e348522d-9448-4288-a0db-499e3b72578a",
              "identifier": "dac_api_client",
              "kind": "ios",
              "notificationToken": null,
              "version": Array [
                1,
                2,
                3,
              ],
            },
            "id": "21cfa508-5cfc-40bb-80d5-ee98d7c844dc",
            "token": "l2y_su7_Lydbp0JqfapG2TFew12DWbxS_KEd3V2AF8M",
            "user": "19e83583-8668-4ca9-8ad5-d1f676585033",
            "workspace": "ce23b832-083e-4a52-b501-a3893e352c43",
          },
          "type": "user/UPDATE_USER_PASSWORD_SUCCESS",
        },
      ]
    `);
  });

  test('handles error', async () => {
    callSdkMethod.sdk.users.updateUserPassword.mockReturnValue(
      Promise.reject(forbiddenError),
    );

    const store = mockStore();
    let err;

    try {
      await store.dispatch(
        updateUserPassword({
          oldPassword: 'randompassword',
          newPassword: 'randompassword',
        }),
      );
    } catch (e) {
      err = e;
    }

    expect(err).toBe(forbiddenError);

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/UPDATE_USER_PASSWORD_REQUEST",
        },
        Object {
          "error": true,
          "payload": [Error: Forbidden],
          "type": "user/UPDATE_USER_PASSWORD_FAILURE",
        },
      ]
    `);
  });
});
