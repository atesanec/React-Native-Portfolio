import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import KeyboardAwareScrollableContentArea from '../../Common/KeyboardAwareScrollableContentArea';
import Paragraph from '../../Common/Paragraph';

import ForgotPasswordFormContainer from '../../../containers/User/ForgotPasswordFormContainer';

import Content from '../../Common/Content';
import messages from './messages';
import AppBarContainer from '../../../containers/Common/AppBarContainer';
// import ListItem from '../../Common/ListItem';

function ForgotPasswordScreen({ baseUrlHost, onSubmit, onSubmitSuccess }) {
  return (
    <>
      <FormattedMessage {...messages.appBar}>
        {(nodes) => <AppBarContainer>{nodes}</AppBarContainer>}
      </FormattedMessage>
      <KeyboardAwareScrollableContentArea
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Content>
          <Paragraph>
            <FormattedMessage {...messages.info} />
          </Paragraph>
          <ForgotPasswordFormContainer
            onSubmit={onSubmit}
            onSubmitSuccess={onSubmitSuccess}
            initialValues={{
              baseUrlHost,
            }}
          />
        </Content>
      </KeyboardAwareScrollableContentArea>
    </>
  );
}

ForgotPasswordScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired,
  baseUrlHost: PropTypes.string.isRequired,
};

export default ForgotPasswordScreen;
