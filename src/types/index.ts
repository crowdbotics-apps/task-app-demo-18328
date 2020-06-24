import { StyleProp, TextStyle } from 'react-native';

import { DefaultTheme } from 'styled-components';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { SFC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

export interface User {
  displayName: string;
  age: number;
  job: string;
}

type StackParamList = {
  Intro: { userId: string };
  Auth: { screenIndex: number };
};

export type DefaultNavigationProps<
  T extends keyof StackParamList
> = StackNavigationProp<StackParamList, T>;

export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface IconProps {
  style?: StyleProp<TextStyle>;
  width?: number | string;
  height?: number | string;
  children?: never;
}

export type IconType = SFC<IconProps>;
