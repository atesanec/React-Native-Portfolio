import configureMockStore from '../../test/configureMockStore';
import getWebPassListIssuedByUser from './getWebPassListIssuedByUser';

import forbiddenError from '../common/__mocks__/forbiddenError';
import callSdkMethod from '../common/callSdkMethod';

const mockStore = configureMockStore();

describe('getWebPassListIssuedByUser', () => {
  afterEach(() => {
    callSdkMethod.sdk.users.getWebPassesIssuedByUser.mockReset();
  });

  test('handles success', async () => {
    callSdkMethod.sdk.users.getWebPassesIssuedByUser.mockReturnValue(
      Promise.resolve(
        JSON.parse(`[
          {
            "id": "1a69f192-a5e4-46a3-bcce-c6fa613a7596",
            "workspace": "1a69f192-a5e4-46a3-bcce-c6fa613a7596",
            "owner": "1a69f192-a5e4-46a3-bcce-c6fa613a7596",
            "parent_pass": "1a69f192-a5e4-46a3-bcce-c6fa613a7596",
            "access_point": "1a69f192-a5e4-46a3-bcce-c6fa613a7596",
            "door": {
              "name": "My door",
              "placement_type": "indoor",
              "usage_type": "office-room",
              "description": "Floor 1",
              "metadata": {},
              "address": {
                "line_1": "Eichborndamm 9",
                "line_2": "Block 5",
                "line_3": "Subblock 5",
                "city": "Berlin",
                "region": "Bavaria",
                "country": "Germany",
                "zipcode": "13403",
                "description": "Office address"
              }
            },
            "display_name": "string",
            "creation_time": "2017-07-21T17:32:28Z",
            "validity": {
              "start": "2020-01-08T23:22:25.842Z",
              "duration": 0
            },
            "permissions": {
              "issue": true
            },
            "time_restrictions": {
              "by_weekdays": {
                "mon": [
                  {
                    "start": "1994-11-05T13:15:30Z",
                    "duration": 86400000
                  }
                ],
                "tue": [
                  {
                    "start": "1994-11-05T13:15:30Z",
                    "duration": 86400000
                  }
                ],
                "wed": [
                  {
                    "start": "1994-11-05T13:15:30Z",
                    "duration": 86400000
                  }
                ],
                "thu": [
                  {
                    "start": "1994-11-05T13:15:30Z",
                    "duration": 86400000
                  }
                ],
                "fri": [
                  {
                    "start": "1994-11-05T13:15:30Z",
                    "duration": 86400000
                  }
                ],
                "sat": [
                  {
                    "start": "1994-11-05T13:15:30Z",
                    "duration": 86400000
                  }
                ],
                "sun": [
                  {
                    "start": "1994-11-05T13:15:30Z",
                    "duration": 86400000
                  }
                ]
              }
            }
          }
        ]`),
      ),
    );

    const store = mockStore();

    await store.dispatch(getWebPassListIssuedByUser());

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/GET_WEB_PASS_LIST_ISSUED_BY_USER_REQUEST",
        },
        Object {
          "payload": Array [
            Object {
              "access_point": "1a69f192-a5e4-46a3-bcce-c6fa613a7596",
              "creation_time": "2017-07-21T17:32:28Z",
              "display_name": "string",
              "door": Object {
                "address": Object {
                  "city": "Berlin",
                  "country": "Germany",
                  "description": "Office address",
                  "line_1": "Eichborndamm 9",
                  "line_2": "Block 5",
                  "line_3": "Subblock 5",
                  "region": "Bavaria",
                  "zipcode": "13403",
                },
                "description": "Floor 1",
                "metadata": Object {},
                "name": "My door",
                "placement_type": "indoor",
                "usage_type": "office-room",
              },
              "id": "1a69f192-a5e4-46a3-bcce-c6fa613a7596",
              "owner": "1a69f192-a5e4-46a3-bcce-c6fa613a7596",
              "parent_pass": "1a69f192-a5e4-46a3-bcce-c6fa613a7596",
              "permissions": Object {
                "issue": true,
              },
              "time_restrictions": Object {
                "by_weekdays": Object {
                  "fri": Array [
                    Object {
                      "duration": 86400000,
                      "start": "1994-11-05T13:15:30Z",
                    },
                  ],
                  "mon": Array [
                    Object {
                      "duration": 86400000,
                      "start": "1994-11-05T13:15:30Z",
                    },
                  ],
                  "sat": Array [
                    Object {
                      "duration": 86400000,
                      "start": "1994-11-05T13:15:30Z",
                    },
                  ],
                  "sun": Array [
                    Object {
                      "duration": 86400000,
                      "start": "1994-11-05T13:15:30Z",
                    },
                  ],
                  "thu": Array [
                    Object {
                      "duration": 86400000,
                      "start": "1994-11-05T13:15:30Z",
                    },
                  ],
                  "tue": Array [
                    Object {
                      "duration": 86400000,
                      "start": "1994-11-05T13:15:30Z",
                    },
                  ],
                  "wed": Array [
                    Object {
                      "duration": 86400000,
                      "start": "1994-11-05T13:15:30Z",
                    },
                  ],
                },
              },
              "validity": Object {
                "duration": 0,
                "start": "2020-01-08T23:22:25.842Z",
              },
              "workspace": "1a69f192-a5e4-46a3-bcce-c6fa613a7596",
            },
          ],
          "type": "user/GET_WEB_PASS_LIST_ISSUED_BY_USER_SUCCESS",
        },
      ]
    `);
  });

  test('handles error', async () => {
    callSdkMethod.sdk.users.getWebPassesIssuedByUser.mockReturnValue(
      Promise.reject(forbiddenError),
    );

    const store = mockStore();
    let err;

    try {
      await store.dispatch(getWebPassListIssuedByUser());
    } catch (e) {
      err = e;
    }

    expect(err).toBe(forbiddenError);

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "user/GET_WEB_PASS_LIST_ISSUED_BY_USER_REQUEST",
        },
        Object {
          "error": true,
          "payload": [Error: Forbidden],
          "type": "user/GET_WEB_PASS_LIST_ISSUED_BY_USER_FAILURE",
        },
      ]
    `);
  });
});
