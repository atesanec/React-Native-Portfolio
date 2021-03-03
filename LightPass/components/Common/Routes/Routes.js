import React from 'react';
import { Route, Switch } from 'react-router-native';

import WelcomeScreen from '../WelcomeScreen';
import HomeScreenContainer from '../../../containers/Common/HomeScreenContainer';
import withGuestGuard from '../withGuestGuard';
import withLoggedGuard from '../withLoggedGuard';
import ForgotPasswordScreenContainer from '../../../containers/User/ForgotPasswordScreenContainer';
import CheckEmailScreen from '../../User/CheckEmailScreen';
import RecoverPasswordScreenResolver from '../../User/RecoverPasswordScreenResolver';
import ActivationScreenResolver from '../../User/ActivationUserScreenResolver/ActivationUserScreenResolver';
import LoginWorkspaceScreenContainer from '../../../containers/User/LoginWorkspaceScreenContainer';
import LoginCredentialsScreenContainer from '../../../containers/User/LoginCredentialsScreenContainer';
import ForgotWorkspaceScreen from '../../User/ForgotWorkspaceScreen';
import EditUserScreenContainer from '../../../containers/User/EditUserScreenContainer';
import WorkspaceDetailsScreenContainer from '../../../containers/Workspace/WorkspaceDetailsScreenContainer';
import EditWorkspaceScreenContainer from '../../../containers/Workspace/EditWorkspaceScreenContainer';
import ChangePasswordScreenContainer from '../../../containers/User/ChangePasswordScreenContainer';
import WorkspaceListScreenContainer from '../../../containers/Workspace/WorkspaceListScreenContainer';
import UserListScreenContainer from '../../../containers/User/UserListScreenContainer';
import CreateUserScreenContainer from '../../../containers/User/CreateUserScreenContainer';
import LsaScreen from '../../Lsa/LsaScreen';
import BleScreenContainer from '../../../containers/Ble/BleScreenContainer';
import CreateDoorScreenContainer from '../../../containers/Door/CreateDoorScreenContainer';
import DoorListScreenContainer from '../../../containers/Door/DoorListScreenContainer';
import DoorDetailsScreenResolver from '../../Door/DoorDetailsScreenResolver/DoorDetailsScreenResolver';
import DoorFirmwareUpdateScreenResolver from '../../Door/DoorFirmwareUpdateScreenResolver';
import EditDoorScreenResolver from '../../Door/EditDoorScreenResolver';
import EditDoorLocationScreenResolver from '../../Door/EditDoorLocationScreenResolver/EditDoorLocationScreenResolver';
import PassDetailsScreenResolver from '../../Pass/PassDetailsScreenResolver/PassDetailsScreenResolver';
import SharedPassDetailsScreenResolver from '../../Pass/SharedPassDetailsScreenResolver/SharedPassDetailsScreenResolver';
import WebPassDetailsScreenResolver from '../../Pass/WebPassDetailsScreenResolver/WebPassDetailsScreenResolver';
import PassListScreenContainer from '../../../containers/Pass/PassListScreenContainer';
import CreatePassScreenContainer from '../../../containers/Pass/CreatePassScreenContainer';
import OpenDoorScreenContainer from '../../../containers/Pass/OpenDoorScreenContainer';
import UserDetailsScreenContainer from '../../../containers/User/UserDetailsScreenContainer';
import MoreScreenContainer from '../../../containers/Common/MoreScreenContainer';
import ProtectionScreen from '../ProtectionScreen';

const isDevelopmentEnv = process.env.NODE_ENV === 'development';
// `component`s should have same values to reuse them in `Switch`
// details are here: https://github.com/ReactTraining/react-router/issues/4578#issuecomment-282081567
const routes = (
  <Switch>
    <Route path="/forgot-password" exact component={ForgotPasswordScreenContainer} />
    <Route path="/check-email" exact component={CheckEmailScreen} />
    <Route path="/recover-password" exact component={RecoverPasswordScreenResolver} />
    <Route path="/forgot-workspace" exact component={ForgotWorkspaceScreen} />
    <Route path="/activation" exact component={ActivationScreenResolver} />
    <Route path="/welcome" exact component={WelcomeScreen} />
    <Route path="/protection" exact component={ProtectionScreen} />

    <Route path="/login/workspace" exact component={withGuestGuard(LoginWorkspaceScreenContainer)} />
    <Route path="/login/credentials" exact component={withGuestGuard(LoginCredentialsScreenContainer)} />

    <Route path="/change-password" exact component={withLoggedGuard(ChangePasswordScreenContainer)} />

    <Route path="/lsa" exact component={withLoggedGuard(LsaScreen)} />

    <Route path="/ble" exact component={withLoggedGuard(BleScreenContainer)} />

    <Route path="/users" exact component={withLoggedGuard(UserListScreenContainer)} />
    <Route path="/users/current/edit" exact component={withLoggedGuard(EditUserScreenContainer)} />
    <Route path="/users/create" exact component={withLoggedGuard(CreateUserScreenContainer)} />
    <Route path="/users/:id" exact component={withLoggedGuard(UserDetailsScreenContainer)} />

    <Route path="/passes" exact component={withLoggedGuard(PassListScreenContainer)} />
    <Route path="/passes/create" component={withLoggedGuard(CreatePassScreenContainer)} />
    <Route path="/passes/create/pass-type" component={withLoggedGuard(CreatePassScreenContainer)} />
    <Route path="/passes/shared/:id" exact component={withLoggedGuard(SharedPassDetailsScreenResolver)} />
    <Route path="/webpasses/:id" exact component={withLoggedGuard(WebPassDetailsScreenResolver)} />
    <Route path="/passes/open-door" exact component={withLoggedGuard(OpenDoorScreenContainer)} />
    <Route path="/passes/:id" exact component={withLoggedGuard(PassDetailsScreenResolver)} />

    <Route path="/doors" exact component={withLoggedGuard(DoorListScreenContainer)} />
    <Route path="/doors/create" component={withLoggedGuard(CreateDoorScreenContainer)} />
    <Route path="/doors/:id" exact component={withLoggedGuard(DoorDetailsScreenResolver)} />
    <Route path="/doors/:id/firmware-update" exact component={withLoggedGuard(DoorFirmwareUpdateScreenResolver)} />
    <Route path="/doors/:id/edit" exact component={withLoggedGuard(EditDoorScreenResolver)} />
    <Route path="/doors/:id/edit-location" exact component={withLoggedGuard(EditDoorLocationScreenResolver)} />

    <Route path="/more" exact component={withLoggedGuard(MoreScreenContainer)} />

    <Route path="/workspaces" exact component={withLoggedGuard(WorkspaceListScreenContainer)} />
    <Route path="/workspaces/current" exact component={withLoggedGuard(WorkspaceDetailsScreenContainer)} />

    <Route path="/workspaces/current/edit" exact component={withLoggedGuard(EditWorkspaceScreenContainer)} />

    {/* ROUTE FOR TESTS */}
    <Route path="/" component={isDevelopmentEnv ? withLoggedGuard(HomeScreenContainer) : withLoggedGuard(OpenDoorScreenContainer)} />

  </Switch>
);

export default function Routes() {
  return routes;
}
