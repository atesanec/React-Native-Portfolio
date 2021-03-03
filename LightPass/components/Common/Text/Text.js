import React from 'react';
import { Text as TextBase } from 'react-native';
import PropTypes from 'prop-types';
import { fonts, colors } from '../../../common/theme';
import getMappingByObjectKeys from '../../../common/getMappingByObjectKeys';

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
  light: 'light',
};

const sizes = getMappingByObjectKeys(fonts.size);
const lineHeights = getMappingByObjectKeys(fonts.lineHeight);

const mapFontWeightToFamily = {
  [fontWeights.regular]: fonts.family.TradeGothicNextLTProRegular,
  [fontWeights.bold]: fonts.family.TradeGothicNextLTProBd,
  [fontWeights.light]: fonts.family.TradeGothicNextLTProLight,
};

function Text({
  children,
  style,
  numberOfLines,
  weight,
  color,
  uppercase,
  underline,
  lineHeight,
  size,
  onPress,
}) {
  return (
    <TextBase
      style={[
        {
          fontSize: fonts.size[size],
          lineHeight: fonts.lineHeight[lineHeight],
          fontFamily: mapFontWeightToFamily[weight],
          textDecorationLine: underline && 'underline',
          textTransform: uppercase && 'uppercase',
          color,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  weight: PropTypes.oneOf(Object.keys(fontWeights)),
  lineHeight: PropTypes.oneOf(Object.keys(fonts.lineHeight)),
  size: PropTypes.oneOf(Object.keys(fonts.size)),
  style: PropTypes.any,
  color: PropTypes.string,
  uppercase: PropTypes.bool,
  underline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  onPress: PropTypes.func,
};

Text.defaultProps = {
  style: null,
  underline: null,
  uppercase: null,
  weight: fontWeights.regular,
  size: sizes.medium,
  lineHeight: lineHeights.medium,
  color: colors.black,
  numberOfLines: null,
  onPress: null,
};

export default Text;
