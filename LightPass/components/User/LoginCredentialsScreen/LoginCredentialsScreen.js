import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import KeyboardAwareScrollableContentArea from '../../Common/KeyboardAwareScrollableContentArea';
import Content from '../../Common/Content';
import AppBarContainer from '../../../containers/Common/AppBarContainer';
import LoginCredentialsFormContainer from '../../../containers/User/LoginCredentialsFormContainer';

import messages from './messages';

function LoginCredentialsScreen({ onGoBack, onCredentialsFormSubmit }) {
  return (
    <>
      <FormattedMessage {...messages.appBar}>
        {(nodes) => <AppBarContainer onGoBack={onGoBack}>{nodes}</AppBarContainer>}
      </FormattedMessage>
      <KeyboardAwareScrollableContentArea
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Content>
          <LoginCredentialsFormContainer onSubmit={onCredentialsFormSubmit} />
        </Content>
      </KeyboardAwareScrollableContentArea>
    </>
  );
}

LoginCredentialsScreen.propTypes = {
  onCredentialsFormSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func,
};

LoginCredentialsScreen.defaultProps = {
  onGoBack: null,
};


export default LoginCredentialsScreen;
