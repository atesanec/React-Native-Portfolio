/* eslint-disable global-require */
import { loadAsync as loadFontAsync } from 'expo-font';
import { StyleSheet } from 'react-native';

export const spacers = [
  {
    id: 'zero',
    rate: 0, // 0
  },
  {
    id: 'xs',
    rate: 0.5, // 4
  },
  {
    id: 's',
    rate: 0.75, // 6
  },
  {
    id: 'e8', // this ID is temporary and will be changed little bit later
    rate: 1, // 8
  },
  {
    id: 'e10', // this ID is temporary and will be changed little bit later
    rate: 1.25, // 10
  },
  {
    id: 'm',
    rate: 1.5, // 12
  },
  {
    id: 'e16', // this ID is temporary and will be changed little bit later
    rate: 2, // 16
  },
  {
    id: 'e20', // this ID is temporary and will be changed little bit later
    rate: 2.5, // 20
  },
  {
    id: 'l',
    rate: 3, // 24
  },
  {
    id: 'xl',
    rate: 4.5, // 36
  },
  {
    id: 'xxl',
    rate: 5.5, // 44
  },
];

export const loadFontFamily = () => loadFontAsync({
  'SFPro-Display-Bold': require('../../assets/fonts/SFProDisplay-Bold.ttf'),
  'SFPro-Text-Medium': require('../../assets/fonts/SFProText-Medium.ttf'),
  'SFPro-Text-Regular': require('../../assets/fonts/SFProText-Regular.ttf'),
  'TradeGothicNextLTPro-Bd': require('../../assets/fonts/TradeGothicNextLTPro-Bd.otf'),
  'TradeGothicNextLTPro-Rg': require('../../assets/fonts/TradeGothicNextLTPro-Rg.otf'),
  'TradeGothicNextLTPro-Lt': require('../../assets/fonts/TradeGothicNextLTPro-Lt.otf'),
});

export const getReactNativePaperFontConfig = () => ({
  default: {
    bold: {
      fontFamily: 'TradeGothicNextLTPro-Bd',
      fontWeight: 'normal',
    },
    regular: {
      fontFamily: 'TradeGothicNextLTPro-Rg',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'TradeGothicNextLTPro-Rg',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'TradeGothicNextLTPro-Lt',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'TradeGothicNextLTPro-Rg',
      fontWeight: 'normal',
    },
  },
});

function generateSpacingStyle(spacing, styleAttributePrefix, styleNamePrefix) {
  return spacers.reduce((map, { id, rate }) => {
    const mt = {
      [`${styleAttributePrefix}Top`]: rate * spacing,
    };
    const mb = {
      [`${styleAttributePrefix}Bottom`]: rate * spacing,
    };
    const ml = {
      [`${styleAttributePrefix}Left`]: rate * spacing,
    };
    const mr = {
      [`${styleAttributePrefix}Right`]: rate * spacing,
    };
    return {
      ...map,
      [`${styleNamePrefix}t${id}`]: mt,
      [`${styleNamePrefix}b${id}`]: mb,
      [`${styleNamePrefix}l${id}`]: ml,
      [`${styleNamePrefix}r${id}`]: mr,
      [`${styleNamePrefix}v${id}`]: {
        ...mt,
        ...mb,
      },
      [`${styleNamePrefix}h${id}`]: {
        ...ml,
        ...mr,
      },
      [`${styleNamePrefix}a${id}`]: {
        ...mt,
        ...mb,
        ...ml,
        ...mr,
      },
    };
  }, {});
}

export const generateSpacingStyles = (spacing) => StyleSheet.create({
  ...generateSpacingStyle(spacing, 'margin', 'm'),
  ...generateSpacingStyle(spacing, 'padding', 'p'),
});
