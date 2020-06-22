import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

import Intro from '../screen/Intro/';
import { NavigationContainer } from '@react-navigation/native';
import Privacy from '../screen/Privacy';
import React from 'react';
import Terms from '../screen/Terms';
import { useThemeContext } from '../../providers/ThemeProvider';

const Stack = createNativeStackNavigator();

function RootNavigator(): React.ReactElement {
  const { theme } = useThemeContext();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: { color: theme.fontColor },
          headerTintColor: theme.tintColor,
        }}
      >
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }} />
        <Stack.Screen name="Terms" component={Terms} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
