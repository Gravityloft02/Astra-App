import 'react-native-gesture-handler';
import React from 'react';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
