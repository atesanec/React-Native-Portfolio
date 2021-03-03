
import { StyleSheet } from 'react-native';
import { spacing } from '../../../common/theme';

const {
  plm,
  mbm,
  mvl,
} = spacing.spacingStyles;
const { e8, l } = spacing.spacingValues;

export default StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    ...mbm,
  },
  linkText: {
    textAlign: 'center',
  },
  link: {
    ...mvl,
  },
  workspaceInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  suffix: {
    ...plm,
    paddingTop: e8 + l,
    textAlign: 'right',
    textAlignVertical: 'center',
    alignSelf: 'flex-start',
  },
  rotateArrow: {
    transform: [{ rotate: '180deg' }],
  },
});
