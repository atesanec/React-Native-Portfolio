import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import KeyboardAwareScrollableContentArea from '../../Common/KeyboardAwareScrollableContentArea';

import Content from '../../Common/Content';
import AppBar from '../../Common/AppBar';
import ActivationUserFormContainer from '../../../containers/User/ActivationUserFormContainer';

import messages from './messages';

export default class ActivationUserScreen extends Component {
  async componentDidMount() {
    const { workspaceDomain, onComponentDidMount } = this.props;

    await onComponentDidMount(workspaceDomain);
  }

  render() {
    const {
      onSubmit,
      onSubmitSuccess,
      email,
    } = this.props;

    return (
      <>
        <FormattedMessage {...messages.appBar}>
          {(nodes) => <AppBar>{nodes}</AppBar>}
        </FormattedMessage>
        <KeyboardAwareScrollableContentArea>
          <Content>
            <ActivationUserFormContainer
              onSubmit={onSubmit}
              onSubmitSuccess={onSubmitSuccess}
              email={email}
            />
          </Content>
        </KeyboardAwareScrollableContentArea>
      </>
    );
  }
}

ActivationUserScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired,
  onComponentDidMount: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  workspaceDomain: PropTypes.string.isRequired,
  workspaceDisplayName: PropTypes.string.isRequired,
};
