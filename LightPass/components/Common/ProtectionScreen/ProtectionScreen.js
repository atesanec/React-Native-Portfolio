import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  View,
  ScrollView,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import Text from '../Text';
import Content from '../Content';
import messages from './messages';
import styles from './styles';
import Divider from '../Divider';
import AppBar from '../../../containers/Common/AppBarContainer';


function ProtectionScreen() {
  return (
    <>
      <FormattedMessage {...messages.appBar}>
        {(nodes) => (
          <AppBar>
            {nodes}
          </AppBar>
        )}
      </FormattedMessage>
      <Content>
        <ScrollView>
          <Text style={styles.title}>
            <FormattedMessage {...messages.title1} />
          </Text>
          <View>
            <Divider />
            <Text style={styles.text}>
              <FormattedMessage {...messages.description1} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header1} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text1} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header2} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text2} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header3} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text3} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header4} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text4} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header5} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text5} />
            </Text>
            <Divider />
          </View>
          <Text style={styles.title}>
            <FormattedMessage {...messages.title2} />
          </Text>
          <View>
            <Divider />
            <Text style={styles.header}>
              <FormattedMessage {...messages.header6} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text6} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header7} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text7} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header8} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text8} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header9} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text9} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header10} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text10} />
              <Text
                style={styles.link}
                onPress={() => WebBrowser.openBrowserAsync('https://www.fsb.de/datenschutz')}
              >
                {' www.fsb.de/datenschutz'}
              </Text>
            </Text>
            <Divider />
          </View>
          <Text style={styles.title}>
            <FormattedMessage {...messages.title3} />
          </Text>
          <View>
            <Divider />
            <Text style={styles.text}>
              <FormattedMessage {...messages.description2} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header11} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text11} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header12} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text12} />
            </Text>
            <Divider />
          </View>
          <Text style={styles.title}>
            <FormattedMessage {...messages.title4} />
          </Text>
          <View>
            <Divider />
            <Text style={styles.text}>
              <FormattedMessage {...messages.description3} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header13} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text13} />
            </Text>
          </View>
          <Text style={styles.title}>
            <FormattedMessage {...messages.title5} />
          </Text>
          <View>
            <Divider />
            <Text style={styles.text}>
              <FormattedMessage {...messages.description4} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header14} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text14} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header15} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text15} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header16} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text16} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.receiverLine1} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.receiverLine2} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.addressLine1} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.addressLine2} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.addressLine3} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header17} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text17} />
            </Text>
          </View>
          <Text style={styles.title}>
            <FormattedMessage {...messages.title6} />
          </Text>
          <View>
            <Divider />
            <Text style={styles.header}>
              <FormattedMessage {...messages.header18} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text18} />
            </Text>
            <Text style={styles.header}>
              <FormattedMessage {...messages.header19} />
            </Text>
            <Text style={styles.text}>
              <FormattedMessage {...messages.text19} />
            </Text>
          </View>
        </ScrollView>
      </Content>
    </>
  );
}

export default ProtectionScreen;
