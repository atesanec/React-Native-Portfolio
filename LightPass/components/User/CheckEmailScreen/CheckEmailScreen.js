import React from 'react';
import { View, Linking } from 'react-native';
import { FormattedMessage } from 'react-intl';
import * as WebBrowser from 'expo-web-browser';
// import { openInbox } from 'react-native-email-link';

import Paragraph from '../../Common/Paragraph';
import Button from '../../Common/Button';
import Content from '../../Common/Content';
import AppBarContainer from '../../../containers/Common/AppBarContainer';

import messages from './messages';
import styles from './styles';
import showErrorMessage from '../../../common/showErrorMessage';
import reportError from '../../../common/reportError';


function onOpenInboxWeb() {
  try {
    WebBrowser.openBrowserAsync('https://google.com');
  } catch (error) {
    showErrorMessage(error);
    reportError(error);
  }
}

async function onOpenInboxApp() {
  // Can be used after ejecting expo
  // https://github.com/tschoffelen/react-native-email-link/tree/rnpm#installation
  // openInbox()
  let res;
  try {
    const canIDOIt = await Linking.canOpenURL('mailto:');
    res = canIDOIt ? Linking.openURL('mailto:') : onOpenInboxWeb();
  } catch (error) {
    showErrorMessage(error);
    reportError(error);
  }

  return res;
}

function CheckEmailScreen() {
  return (
    <>
      <FormattedMessage {...messages.appBar}>
        {(nodes) => <AppBarContainer>{nodes}</AppBarContainer>}
      </FormattedMessage>
      <Content>
        <Paragraph>
          <FormattedMessage {...messages.info} />
        </Paragraph>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <FormattedMessage {...messages.openTheEmailApp}>
              {(nodes) => (
                <Button variant="contained" onPress={onOpenInboxApp}>
                  {/* https://github.com/tschoffelen/react-native-email-link/tree/rnpm#installation */}
                  {/* <Button variant="contained" onPress={openInbox}> */}
                  {nodes}
                </Button>
              )}
            </FormattedMessage>
          </View>
          <FormattedMessage {...messages.openOnWebPage}>
            {(nodes) => (
              <View style={styles.button}>
                <Button
                  variant="text"
                  // TEMPORARY STUB
                  onPress={onOpenInboxWeb}
                >
                  {nodes}
                </Button>
              </View>
            )}
          </FormattedMessage>
        </View>
      </Content>
    </>
  );
}

export default CheckEmailScreen;
