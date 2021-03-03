import React from 'react';
import { FormattedMessage } from 'react-intl';


import messages from './messages';
import Content from '../../Common/Content';
import AppBarContainer from '../../../containers/Common/AppBarContainer';
import Text from '../../Common/Text';
import { colors } from '../../../common/theme';

function ForgotWorkspaceScreen() {
  return (
    <>
      <FormattedMessage {...messages.appBar}>
        {(nodes) => <AppBarContainer>{nodes}</AppBarContainer>}
      </FormattedMessage>
      <Content>
        <Text color={colors.brownishGrey}>
          <FormattedMessage {...messages.learnMore} />
        </Text>
      </Content>
    </>
  );
}

export default ForgotWorkspaceScreen;
