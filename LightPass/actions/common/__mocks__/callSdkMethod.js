const sdk = {
  sessions: {
    createSession: jest.fn(),
    deleteSession: jest.fn(),
  },
  workspaces: {
    deleteWorkspace: jest.fn(),
    getWorkspace: jest.fn(),
    updateWorkspace: jest.fn(),
  },
  users: {
    createUser: jest.fn(),
    getUser: jest.fn(),
    getUserList: jest.fn(),
    resetPassword: jest.fn(),
    setUserPassword: jest.fn(),
    updateUser: jest.fn(),
    updateUserPassword: jest.fn(),
    deleteUser: jest.fn(),
    getPassList: jest.fn(),
    getPassesIssuedByUser: jest.fn(),
    getWebPassesIssuedByUser: jest.fn(),
  },
  doors: {
    createDoor: jest.fn(),
    confirmDoorInstallation: jest.fn(),
    getDoor: jest.fn(),
    deleteDoor: jest.fn(),
    updateDoor: jest.fn(),
    getDoors: jest.fn(),
    timeSync: jest.fn(),
  },
  passes: {
    getPass: jest.fn(),
    getWebPass: jest.fn(),
    getChilrenPasses: jest.fn(),
    deleteWebPass: jest.fn(),
    deletePass: jest.fn(),
    issueWebPass: jest.fn(),
    issuePass: jest.fn(),
  },
};

const callSdkMethod = (callback) => () => callback(sdk);
callSdkMethod.sdk = sdk;

export default callSdkMethod;
