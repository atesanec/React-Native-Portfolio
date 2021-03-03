/* eslint-disable import/prefer-default-export */
import { DefaultTheme } from 'react-native-paper';
import { generateSpacingStyles, getReactNativePaperFontConfig, spacers } from './themeHelpers';

const gutterWidth = 8;
const deprecatedGutterWidth = 12;

const generateSpacingValues = (gutter) => {
  const spacingValues = {};

  spacers.forEach((obj) => {
    spacingValues[obj.id] = gutter * obj.rate;
  });

  return spacingValues;
};

export const colors = {
  coral: '#ff5c3f',
  cornflowerBlueTwo: 'rgba(89,158,212, 1)',
  disabledGrey: 'rgba(237, 236, 236, 1)',
  dustyOrange: '#e98c2f',
  brownishOrange: 'rgba(219, 120, 22, 1)',
  warmGrey: 'rgba(112, 112, 112, 1)',
  lightGray: 'rgba(246, 246, 246, 1)',
  greyish: 'rgba(178, 178, 178, 178)',
  whiteThree: 'rgba(229, 229, 229, 1)',
  cornflowerBlue: 'rgba(101, 166, 216, 1)',
  tomato: 'rgba(218, 63, 36, 1)',
  coralcornflowerBlueTwo: 'rgba(89, 158, 212, 1)',
  pressedState: 'rgba(89, 158, 212, 1)',
  lightOrange: 'rgba(255, 158, 63, 1)',
  brownishGrey: 'rgba(112, 112, 112, 1)',
  inputLineBlack: 'rgba(57, 57, 57, 1)',
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',
  blackOpacity03: 'rgba(0, 0, 0, 0.3)',
  inputLabelActiveOpacity06: 'rgba(60, 60, 67, 0.6)',
  orngeyRed: 'rgba(255, 59, 48, 1)',
  topNav: 'rgba(0, 0, 0, 0.3)',
  brightBlue: 'rgba(0, 122, 255, 1)',
  transparentObjectGrey: 'rgb 120 120 128 0.2',
  coolGreen: 'rgba(52, 199, 89, 1)',
  mainGrey: 'rgba(239, 239, 244, 1)',
  veryLightPink: 'rgba(218, 218, 218, 1)',
};

export const spacing = {
  gutterWidth: deprecatedGutterWidth,
  spacingValues: generateSpacingValues(gutterWidth),
  spacingStyles: generateSpacingStyles(gutterWidth),
};

export const icons = {
  size: {
    small: 12,
    medium: 24,
    large: 32,
    extraLarge: 64,
  },
};

export const fonts = {
  size: {
    extraLarge: 20,
    large: 17,
    medium: 15,
    small: 12,
    smallest: 11,
  },
  lineHeight: {
    large: 24,
    medium: 20,
    small: 17,
    extraSmall: 15,
    smallest: 12,
  },
  family: {
    TradeGothicNextLTProBd: 'TradeGothicNextLTPro-Bd',
    TradeGothicNextLTProLight: 'TradeGothicNextLTPro-Lt',
    TradeGothicNextLTProRegular: 'TradeGothicNextLTPro-Rg',
  },
};

export const DefaultReactNativePaperTheme = {
  fonts: getReactNativePaperFontConfig(),
  ...DefaultTheme,
};
