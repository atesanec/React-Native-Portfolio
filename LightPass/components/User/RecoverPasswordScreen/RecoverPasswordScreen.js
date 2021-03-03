import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import KeyboardAwareScrollableContentArea from '../../Common/KeyboardAwareScrollableContentArea';

import RecoverPasswordFormContainer from '../../../containers/User/RecoverPasswordFormContainer';
import Content from '../../Common/Content';
import messages from './messages';
import AppBarContainer from '../../../containers/Common/AppBarContainer';
import Text from '../../Common/Text';

export default class RecoverPasswordScreen extends Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props;

    onComponentDidMount();
  }

  render() {
    const {
      onSubmit,
      onSubmitSuccess,
      workspaceDisplayName,
      workspaceDomain,
      email,
      onGoBack,
    } = this.props;

    return (
      <>
        <FormattedMessage {...messages.appBar}>
          {(nodes) => <AppBarContainer onGoBack={onGoBack}>{nodes}</AppBarContainer>}
        </FormattedMessage>
        <KeyboardAwareScrollableContentArea
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Content>
            <Text>
              <FormattedMessage {...messages.info} />
            </Text>
            <RecoverPasswordFormContainer
              workspaceDisplayName={workspaceDisplayName}
              workspaceDomain={workspaceDomain}
              email={email}
              onSubmit={onSubmit}
              onSubmitSuccess={onSubmitSuccess}
            />
          </Content>
        </KeyboardAwareScrollableContentArea>
      </>
    );
  }
}

RecoverPasswordScreen.propTypes = {
  onSubmitSuccess: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
  onComponentDidMount: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  workspaceDomain: PropTypes.string.isRequired,
  workspaceDisplayName: PropTypes.string.isRequired,
};
