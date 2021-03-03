import React from 'react';
import PropTypes from 'prop-types';
import { Appbar } from 'react-native-paper';

import SvgIcArrowBackNextGrey from '@dac/light-ui-assets/lib/icons/IcArrowBackNextGrey';
import { View } from 'react-native';
import { StatusBarHeightConsumer } from '../StatusBarHeight';
import styles from './styles';

function insertSpacers(elements) {
  if (!elements || !Array.isArray(elements) || elements.length <= 1) {
    return elements;
  }

  return elements.reduce((acc, value, index) => {
    acc.push(value);
    if (index < elements.length - 1) {
      acc.push((<View style={styles.buttonSpacer} />));
    }

    return acc;
  }, []);
}

function AppBar({
  children,
  onGoBack,
  Right,
  Left,
}) {
  const OnGoBackAction = onGoBack ? (
    <Appbar.BackAction
      onPress={onGoBack}
      customBackIcon={SvgIcArrowBackNextGrey}
    />
  ) : null;

  return (
    <StatusBarHeightConsumer>
      {({ height }) => {
        const marginTop = height;

        return (
          <Appbar.Header style={[{ marginTop }, styles.appBar]}>
            <Appbar.Content title={children} titleStyle={styles.title} />
            {insertSpacers(Left) || OnGoBackAction}
            <View style={styles.springPlaceholder} />
            {insertSpacers(Right)}
          </Appbar.Header>
        );
      }}
    </StatusBarHeightConsumer>
  );
}

AppBar.propTypes = {
  children: PropTypes.string.isRequired,
  onGoBack: PropTypes.func,
  Left: PropTypes.node,
  Right: PropTypes.node,
};

AppBar.defaultProps = {
  onGoBack: null,
  Left: null,
  Right: null,
};

export default AppBar;
