import React, { useEffect } from 'react';
import RootNavigator from './components/navigation/SwitchNavigator';
import RootProvider from './providers';
import SplashScreen from 'react-native-splash-screen';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

enableScreens();

function App(): React.ReactElement {

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

function ProviderWrapper(): React.ReactElement {
  return (
    <RootProvider>
      <App />
    </RootProvider>
  );
}

export default ProviderWrapper;
