import React from 'react';
import { FormattedMessage } from 'react-intl';

import { dialogNames } from '../../../common/commonConstants';

import messages from './messages';
import AlertDialogContainer from '../../../containers/Common/AlertDialogContainer';
import Text from '../../Common/Text';

function LoginWorkspaceAlertDialog() {
  return (
    <AlertDialogContainer
      dialogName={dialogNames.loginWorkspaceAlert}
      title={<FormattedMessage {...messages.title} />}
      content={(
        <Text>
          <FormattedMessage {...messages.content} />
        </Text>
      )}
      okMessage={<FormattedMessage {...messages.ok} />}
    />
  );
}

export default LoginWorkspaceAlertDialog;
