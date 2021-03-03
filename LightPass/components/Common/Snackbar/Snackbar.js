import React from 'react';
import PropTypes from 'prop-types';

import { Snackbar as SnackbarBase, Icon } from 'react-native-paper';
import { FormattedMessage } from 'react-intl';
import SvgIcHelp from '@dac/light-ui-assets/lib/icons/IcHelp';
import SvgIcClose from '@dac/light-ui-assets/lib/icons/IcClose';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import { icons } from '../../../common/theme';

function Snackbar({
  snackBar, onHideSnackBar, style,
}) {
  const { message, variant, values } = snackBar || {};
  let leftIcon;
  let bgStyle;

  switch (variant) {
    case 'success':
      leftIcon = 'check';
      bgStyle = styles.cornflowerBlueTwo;
      break;
    case 'error':
      leftIcon = (props) => <SvgIcHelp {...props} />;
      bgStyle = styles.tomato;
      break;

    default:
      bgStyle = styles.cornflowerBlueTwo;
      break;
  }
  const rightIcon = (iconProps) => (<SvgIcClose {...iconProps} />);
  return snackBar && (
    <SnackbarBase
      duration={SnackbarBase.DURATION_MEDIUM}
      visible={!!snackBar}
      onDismiss={onHideSnackBar}
      style={[bgStyle, style]}
      left={(props) => (<Icon {...props} size={icons.size.medium} source={leftIcon} />)}
      right={(props) => (
        <TouchableHighlight onPress={onHideSnackBar}>
          <Icon {...props} size={icons.size.medium} source={rightIcon} />
        </TouchableHighlight>
      )}
    >
      {(message && message.id)
        ? <FormattedMessage {...message} values={values} />
        : <Text>{message}</Text>}
    </SnackbarBase>
  );
}

Snackbar.propTypes = {
  variant: PropTypes.oneOf(['success', 'error']),
  style: PropTypes.object,
  snackBar: PropTypes.object,
  onHideSnackBar: PropTypes.func.isRequired,
};

Snackbar.defaultProps = {
  style: null,
  variant: null,
  snackBar: null,
};

export default Snackbar;
