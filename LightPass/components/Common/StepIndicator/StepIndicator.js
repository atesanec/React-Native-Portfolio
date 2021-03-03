import React from 'react';
import PropTypes, { any } from 'prop-types';
import StepIndicatorBase from 'react-native-step-indicator';
import { generateStepIndicatorStyle } from '../../../common/stepIndicatorStyle';

function StepIndicator({
  currentPosition,
  stepCount,
  direction,
  customStyles,
  labels,
  onPress,
  renderStepIndicator,
  renderLabel,
}) {
  return (
    <StepIndicatorBase
      currentPosition={currentPosition}
      stepCount={stepCount}
      direction={direction}
      customStyles={{ ...generateStepIndicatorStyle(), customStyles }}
      labels={labels}
      onPress={onPress}
      renderStepIndicator={renderStepIndicator}
      renderLabel={renderLabel}
    />
  );
}

StepIndicator.propTypes = {
  currentPosition: PropTypes.number,
  stepCount: PropTypes.number,
  direction: PropTypes.string,
  labels: PropTypes.arrayOf(any),
  customStyles: PropTypes.object,
  onPress: PropTypes.func,
  renderLabel: PropTypes.func,
  renderStepIndicator: PropTypes.func,
};

StepIndicator.defaultProps = {
  labels: null,
  onPress: null,
  // have a bug with null value
  stepCount: undefined,
  direction: null,
  renderLabel: null,
  customStyles: null,
  currentPosition: null,
  renderStepIndicator: null,
};

export default StepIndicator;
