import { Dimensions } from 'react-native';

export const formNames = {
  loginCredentials: 'loginCredentials',
  loginWorkspace: 'loginWorkspace',
  activationAccount: 'activationAccount',
  forgetPassword: 'forgetPassword',
  recoverPassword: 'recoverPassword',
  editAccount: 'editAccount',
  editWorkspace: 'editWorkspace',
  changePassword: 'changePassword',
  deleteAccountConfirmation: 'deleteAccountConfirmation',
  deleteWorkspaceConfirmation: 'deleteWorkspaceConfirmation',
  createUsers: 'createUsers',
  createDoorEnterInfo: 'createDoorEnterInfo',
  editDoor: 'editDoor',
  editDoorLocation: 'editDoorLocation',
  createPass: 'createPass',
  createMemberToPass: 'createMemberToPass',
};

export const dialogNames = {
  // LOGOUT
  logoutConfirmation: 'logoutConfirmation',

  // DELETE WORKSPACE
  deleteWorkspaceConfirmation: 'deleteWorkspaceConfirmation',

  // DELETE USER
  deleteAccountConfirmation: 'deleteAccountConfirmation',

  // INVITE USER
  inviteInfoAlert: 'inviteInfoAlert',

  // LOGIN WORKSPACE USER
  loginWorkspaceAlert: 'loginWorkspaceAlert',

  // BLE
  errorBLEConnection: 'errorBLEConnection',
  BLEPermissionDialog: 'BLEPermissionDialog',
  timeSyncAlert: 'timeSyncAlert',

  // LSA
  renderLSAAttentionConfirmation: 'renderLSAAttentionConfirmation',
  renderLSAAlert: 'renderLSAAlert',

  // DOORS
  closeCreateDoorWizardConfirmation: 'closeCreateDoorWizardConfirmation',
  errorQRScanScanningStepAlert: 'errorQRScanScanningStepAlert',
  deleteDoorConfirmation: 'deleteDoorConfirmation',
  doorFirmwareUpdateActivity: 'doorFirmwareUpdateActivity',
  doorFirmwareCheckVersionActivity: 'doorFirmwareCheckVersionActivity',
  nearbyDoorActivity: 'nearbyDoorActivity',
  doorFirmwareSelectUpdateConfirmation: 'doorFirmwareSelectUpdateConfirmation',

  // DOOR INSTALLATION WIZARD
  // STEP 1
  mountStepAlert: 'mountStepAlert',
  // STEP 2
  QRScanPlaceInfoStepAlert: 'QRScanPlaceInfoStepAlert',
  QRScanScanningStepAlert: 'QRScanScanningStepAlert',
  // STEP 4
  testLightPassStepAlert: 'testLightPassStepAlert',
  testTroubleshootStepAlert: 'testTroubleshootStepAlert',

  // PASSES
  deletePassConfirmation: 'deletePassConfirmation',
  deleteWebPassConfirmation: 'deleteWebPassConfirmation',
  createMemberToPassConfirmation: 'createMemberToPassConfirmation',
  // PASS INSTALLATION WIZARD
  closeCreatePassConfirmation: 'closeCreatePassConfirmation',
};

export const APPBAR_HEIGHT = 56;
export const BOTTOM_NAVIGATION_HEIGHT = 49;
export const TAB_HEIGHT = 48;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;

export const BOTTOM_GAP = 24;
export const WINDOW_WITHOUT_APPBAR_HEIGHT = WINDOW_HEIGHT
- APPBAR_HEIGHT
- BOTTOM_GAP;
export const CONTENT_HEIGHT = WINDOW_HEIGHT
- APPBAR_HEIGHT
- BOTTOM_NAVIGATION_HEIGHT
- BOTTOM_GAP;
