import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { View } from 'react-native';
import SvgIcArrowBackNextGrey from '@dac/light-ui-assets/lib/icons/IcArrowBackNextGrey';
import GoBackButtonContainer from '../../../containers/Common/GoBackButtonContainer';
import Link from '../Link';
import Button from '../Button';
import styles from './styles';

function StepNavigation({
  backMessage,
  nextMessage,
  onBack,
  onNext,
  to,
  isOnNextDisabled,
  isOnBackDisabled,
  containerStyle,
}) {
  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      {!onBack ? (
        <GoBackButtonContainer
          variant="outlined"
          disabled={isOnBackDisabled}
          style={styles.leftButton}
          leftIcon={(iconProps) => (<SvgIcArrowBackNextGrey {...iconProps} />)}
        >
          <FormattedMessage {...backMessage} />
        </GoBackButtonContainer>
      ) : (
        <Button
          variant="outlined"
          disabled={isOnBackDisabled}
          onPress={onBack}
          style={styles.leftButton}
          leftIcon={(iconProps) => (<SvgIcArrowBackNextGrey {...iconProps} />)}
        >
          <FormattedMessage {...backMessage} />
        </Button>
      )}

      {!onNext ? (
        <FormattedMessage {...nextMessage}>
          {(nodes) => (
            <Link
              to={to}
              variant="contained"
              style={styles.rightButton}
              disabled={isOnNextDisabled}
              component={Button}
              rightIcon={(iconProps) => (
                <View style={styles.rotateArrow}>
                  <SvgIcArrowBackNextGrey {...iconProps} />
                </View>
              )}
            >
              {nodes}
            </Link>
          )}
        </FormattedMessage>
      ) : (
        <Button
          variant="contained"
          disabled={isOnNextDisabled}
          onPress={onNext}
          style={styles.rightButton}
          rightIcon={(iconProps) => (
            <View style={styles.rotateArrow}>
              <SvgIcArrowBackNextGrey {...iconProps} />
            </View>
          )}
        >
          <FormattedMessage {...nextMessage} />
        </Button>
      )}
    </View>
  );
}

StepNavigation.propTypes = {
  backMessage: PropTypes.object.isRequired,
  nextMessage: PropTypes.object.isRequired,
  isOnNextDisabled: PropTypes.bool,
  isOnBackDisabled: PropTypes.bool,
  to: PropTypes.string,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
  containerStyle: PropTypes.object,
};

StepNavigation.defaultProps = {
  containerStyle: null,
  to: null,
  onBack: null,
  onNext: null,
  isOnNextDisabled: null,
  isOnBackDisabled: null,
};

export default StepNavigation;
