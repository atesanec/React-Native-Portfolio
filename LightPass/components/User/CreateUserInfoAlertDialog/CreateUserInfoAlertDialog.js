import React from 'react';
import { FormattedMessage } from 'react-intl';

import Paragraph from '../../Common/Paragraph';
import { dialogNames } from '../../../common/commonConstants';

import messages from './messages';
import AlertDialogContainer from '../../../containers/Common/AlertDialogContainer';

function CreateUserInfoAlertDialog() {
  return (
    <AlertDialogContainer
      dialogName={dialogNames.inviteInfoAlert}
      title={<FormattedMessage {...messages.title} />}
      content={(
        <Paragraph>
          <FormattedMessage {...messages.content} />
        </Paragraph>
      )}
      okMessage={<FormattedMessage {...messages.ok} />}
    />
  );
}

export default CreateUserInfoAlertDialog;
