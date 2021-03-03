import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as WebBrowser from 'expo-web-browser';
import PropTypes from 'prop-types';
import IcEdit from '@dac/light-ui-assets/lib/icons/IcEdit';
import IcHomeasPlace from '@dac/light-ui-assets/lib/icons/IcHomeasPlace';
import IcOfficeCoworking from '@dac/light-ui-assets/lib/icons/IcOfficeCoworking';
import IcFitness from '@dac/light-ui-assets/lib/icons/IcFitness';
import Content from '../Content';
import Link from '../Link';
import messages from './messages';
import { colors } from '../../../common/theme';
import AppBar from '../AppBar';
import ListItem from '../ListItem/ListItem';
import ListIcon from '../ListIcon';

const localeRoutes = {
  de: 'https://www.fsb.de/de/unternehmen/ueber-uns/',
  en: 'https://www.fsb.de/en/company/about-us/',
};

function MoreScreen({ locale }) {
  // function handleOpenFAQ() {
  // WebBrowser.openBrowserAsync('https://www.fsb.de/de/footer/datenschutzerklaerung/');
  // }
  function handleOpenAboutFSB() {
    WebBrowser.openBrowserAsync(localeRoutes[locale]);
  }

  return (
    <>
      <FormattedMessage {...messages.appBar}>
        {(nodes) => <AppBar>{nodes}</AppBar>}
      </FormattedMessage>
      <Content>
        <Link
          to="/doors"
          component={ListItem}
          style={{ borderTopWidth: 0 }}
          title={<FormattedMessage {...messages.manageDoors} />}
          left={(itemProps) => (
            <ListIcon {...itemProps} color={colors.black} icon={IcFitness} />
          )}
        />
        <ListItem
          // to="/"
          // onPress={handleOpenFAQ}
          component={ListItem}
          title={<FormattedMessage {...messages.faq} />}
          left={(itemProps) => (
            <ListIcon
              {...itemProps}
              color={colors.black}
              icon={IcOfficeCoworking}
            />
          )}
        />
        <ListItem
          title={<FormattedMessage {...messages.termsConditions} />}
          left={(itemProps) => (
            <ListIcon
              {...itemProps}
              color={colors.black}
              icon={IcHomeasPlace}
            />
          )}
        />
        <Link
          to="/protection"
          component={ListItem}
          title={<FormattedMessage {...messages.dataProtection} />}
          left={(itemProps) => (
            <ListIcon {...itemProps} color={colors.black} icon={IcFitness} />
          )}
        />
        <ListItem
          onPress={handleOpenAboutFSB}
          title={<FormattedMessage {...messages.aboutFsb} />}
          left={(itemProps) => (
            <ListIcon {...itemProps} color={colors.black} icon={IcEdit} />
          )}
        />
      </Content>
    </>
  );
}

MoreScreen.propTypes = {
  locale: PropTypes.string,
};

MoreScreen.defaultProps = {
  locale: 'en',
};

export default MoreScreen;
