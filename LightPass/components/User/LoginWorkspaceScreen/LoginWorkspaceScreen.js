import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import SvgIcHelp from '@dac/light-ui-assets/lib/icons/IcHelp';
import KeyboardAwareScrollableContentArea from '../../Common/KeyboardAwareScrollableContentArea';

import Content from '../../Common/Content';
import LoginWorkspaceFormContainer from '../../../containers/User/LoginWorkspaceFormContainer';

import messages from './messages';
import AppBarContainer from '../../../containers/Common/AppBarContainer';
import AppBarAction from '../../Common/AppBarAction';
import LoginWorkspaceAlertDialog from '../LoginWorkspaceAlertDialog';

function LoginWorkspaceScreen({
  onGoBack,
  onOpenLoginWorkspaceAlertDialog,
  onWorkspaceFormSubmit,
}) {
  return (
    <>
      <FormattedMessage {...messages.appBar}>
        {(nodes) => (
          <AppBarContainer
            onGoBack={onGoBack}
            Right={(
              <AppBarAction
                onPress={onOpenLoginWorkspaceAlertDialog}
                icon={(iconProps) => <SvgIcHelp {...iconProps} />}
              />
            )}
          >
            {nodes}
          </AppBarContainer>
        )}
      </FormattedMessage>
      <KeyboardAwareScrollableContentArea
        extraScrollHeight={10}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Content>
          <LoginWorkspaceFormContainer onSubmit={onWorkspaceFormSubmit} />
        </Content>
      </KeyboardAwareScrollableContentArea>
      <LoginWorkspaceAlertDialog />
    </>
  );
}

LoginWorkspaceScreen.propTypes = {
  onOpenLoginWorkspaceAlertDialog: PropTypes.func.isRequired,
  onWorkspaceFormSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func,
};

LoginWorkspaceScreen.defaultProps = {
  onGoBack: undefined,
};

export default LoginWorkspaceScreen;
