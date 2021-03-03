import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import KeyboardAwareScrollableContentArea from '../../Common/KeyboardAwareScrollableContentArea';

import FormAppBarContainer from '../../../containers/Common/FormAppBarContainer';
import Content from '../../Common/Content';

import messages from './messages';
import ChangePasswordFormContainer from '../../../containers/User/ChangePasswordFormContainer';
import { formNames } from '../../../common/commonConstants';
import computeMultipleStates from '../../../common/computeMultipleStates';
import ScreenState from '../../Common/ScreenState';
import WorkspacePanelContainer from '../../../containers/Workspace/WorkspacePanelContainer';

export default class ChangePasswordScreen extends Component {
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
    } = this.props;
    const multipleState = computeMultipleStates([userState, workspaceState]);
    const error = userError || workspaceError;

    return (
      <>
        <FormattedMessage {...messages.appBar}>
          {(nodes) => (
            <FormAppBarContainer formName={formNames.changePassword}>
              {nodes}
            </FormAppBarContainer>
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
              <WorkspacePanelContainer />
              <ChangePasswordFormContainer onSubmit={onSubmit} />
            </ScreenState>
          </Content>
        </KeyboardAwareScrollableContentArea>
      </>
    );
  }
}

ChangePasswordScreen.propTypes = {
  user: PropTypes.object,
  workspace: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onComponentDidMount: PropTypes.func.isRequired,
  userState: PropTypes.string,
  workspaceState: PropTypes.string,
  userError: PropTypes.any,
  workspaceError: PropTypes.any,
};

ChangePasswordScreen.defaultProps = {
  user: null,
  userError: null,
  workspace: null,
  workspaceError: null,
  userState: null,
  workspaceState: null,
};
