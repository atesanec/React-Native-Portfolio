import { Dimensions } from 'react-native';
import { colors, spacing } from './theme';

const CONTENT_WIDTH = Dimensions.get('window').width - spacing.gutterWidth * 2;

// HACK FOR ESCAPE `justifyContent: 'space-around'`,
// that used, because lib https://github.com/24ark/react-native-step-indicator do not provide style property
export const generateStepIndicatorContainerStyle = (stepCount = 1) => ({
  width: CONTENT_WIDTH * (1 + (1 / stepCount)),
  marginLeft: -CONTENT_WIDTH * (1 / 2) * (1 / stepCount),
});

export const generateStepIndicatorStyle = () => ({
  // INDICATOR
  stepIndicatorSize: 17,
  currentStepIndicatorSize: 17,
  stepIndicatorFinishedColor: colors.cornflowerBlueTwo,
  stepIndicatorUnFinishedColor: colors.whiteThree,
  stepIndicatorCurrentColor: colors.white,

  // STROKE
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: colors.cornflowerBlueTwo,
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: colors.cornflowerBlueTwo,
  stepStrokeUnFinishedColor: colors.whiteThree,

  // SEPARATOR
  separatorStrokeWidth: 5,
  separatorFinishedColor: colors.cornflowerBlueTwo,
  separatorUnFinishedColor: colors.whiteThree,

  // LABEL
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
//   stepIndicatorLabelCurrentColor: 'transparent',
//   stepIndicatorLabelFinishedColor: 'transparent',
//   stepIndicatorLabelUnFinishedColor: 'transparent',
//   labelColor: '#999999',
//   labelSize: 13,
//   currentStepLabelColor: '#7eaec4',
});
