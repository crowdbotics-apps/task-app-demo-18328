import { DefaultTheme } from 'styled-components';
import { ThemeType } from './types';

const colors = {
  skyBlue: '#72c4ff',
  whiteGray: '#f7f6f3',
  dusk: 'rgb(65,77,107)',
  green: 'rgb(29,211,168)',
  greenBlue: 'rgb(36,205,151)',
  mediumGray: 'rgb(134,154,183)',
  paleGray: 'rgb(221,226,236)',
  lightBackground: 'white',
  lightBackgroundLight: '#F4F5F9',
  darkBackground: '#323739',
  darkBackgroundLight: '#393241',
};

const light = {
  background: colors.lightBackground,
  btnPrimary: colors.skyBlue,
  btnPrimaryFont: 'white',
  btnPrimaryLight: colors.whiteGray,
  btnPrimaryLightFont: 'black',
  textDisabled: '#969696',
  btnDisabled: 'rgb(222, 222, 222)',
  fontColor: 'black',
  tintColor: '#333333',
  fontFamily: 'Avenir-Black',
};

export type Theme = typeof light;

const dark: Theme = {
  background: colors.darkBackground,
  btnPrimary: colors.skyBlue,
  btnPrimaryFont: 'white',
  btnPrimaryLight: colors.whiteGray,
  btnPrimaryLightFont: 'black',
  textDisabled: '#969696',
  btnDisabled: 'rgb(222, 222, 222)',
  fontColor: 'white',
  tintColor: '#a3a3a3',
  fontFamily: 'Avenir-Black',
};

const theme = {
  light,
  dark,
};

export const createTheme = (type = ThemeType.LIGHT): DefaultTheme => {
  switch (type) {
    case ThemeType.LIGHT:
      return theme.light;
    case ThemeType.DARK:
      return theme.dark;
  }
};
