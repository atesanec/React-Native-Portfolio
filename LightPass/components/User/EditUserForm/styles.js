
import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../common/theme';

const {
  mbe8, mbm, mrm, mtm, mre10,
} = spacing.spacingStyles;

export default StyleSheet.create({
  inputs: {
    ...mtm,
  },
  inputWrapper: {
    ...mbe8,
  },
  phoneNumberWrapper: {
    flexDirection: 'row',
  },
  inputPlaceholderWrapper: {
    position: 'relative',
  },
  countryField: {
    flex: 0.25,
    ...mre10,
  },
  phoneField: {
    flex: 0.75,
  },
  inputPlaceholderLink: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    ...mbm,
  },
  cancelButton: {
    ...mrm,
  },
  select: {
    borderBottomWidth: 1,
    borderColor: colors.warmGrey,
  },
});
