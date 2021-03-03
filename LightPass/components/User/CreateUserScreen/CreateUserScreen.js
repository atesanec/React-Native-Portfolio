import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import IcHelp from '@dac/light-ui-assets/lib/icons/IcHelp';
import KeyboardAwareScrollableContentArea from '../../Common/KeyboardAwareScrollableContentArea';
import Subheading from '../../Common/Subheading';


import Content from '../../Common/Content';

import messages from './messages';
import computeMultipleStates from '../../../common/computeMultipleStates';
import ScreenState from '../../Common/ScreenState';
import CreateUserFormContainer from '../../../containers/User/CreateUserFormContainer';
import AppBarContainer from '../../../containers/Common/AppBarContainer';
import CreateUserInfoAlertDialog from '../CreateUserInfoAlertDialog';
import AppBarAction from '../../Common/AppBarAction';
import WorkspacePanelContainer from '../../../containers/Workspace/WorkspacePanelContainer';

export default class CreateUserScreen extends Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props;
    onComponentDidMount();
  }

  render() {
    const {
      user,
      workspace,
      userState,
      workspaceState,
      userError,
      workspaceError,
      onSubmit,
      onInviteInfoAlertOpen,
      onSubmitSuccess,
    } = this.props;
    const multipleState = computeMultipleStates([userState, workspaceState]);
    const error = userError || workspaceError;

    return (
      <>
        <FormattedMessage {...messages.appBar}>
          {(nodes) => (
            <AppBarContainer
              Right={(
                <AppBarAction
                  onPress={onInviteInfoAlertOpen}
                  icon={(props) => <IcHelp {...props} />}
                />
              )}
            >
              {nodes}
            </AppBarContainer>
          )}
        </FormattedMessage>
        <KeyboardAwareScrollableContentArea
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Content>
            <ScreenState
              data={user && workspace}
              state={multipleState}
              error={error}
            >
              <Subheading>
                <FormattedMessage {...messages.info} />
              </Subheading>
              <WorkspacePanelContainer />
              <CreateUserFormContainer
                onSubmit={onSubmit}
                onSubmitSuccess={onSubmitSuccess}
              />
            </ScreenState>
          </Content>
        </KeyboardAwareScrollableContentArea>
        <CreateUserInfoAlertDialog />
      </>
    );
  }
}

CreateUserScreen.propTypes = {
  onSubmitSuccess: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onComponentDidMount: PropTypes.func.isRequired,
  onInviteInfoAlertOpen: PropTypes.func.isRequired,
  user: PropTypes.object,
  workspace: PropTypes.object,
  userState: PropTypes.string,
  workspaceState: PropTypes.string,
  userError: PropTypes.any,
  workspaceError: PropTypes.any,
};

CreateUserScreen.defaultProps = {
  user: null,
  userError: null,
  workspace: null,
  workspaceError: null,
  userState: null,
  workspaceState: null,
};
