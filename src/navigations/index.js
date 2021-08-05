import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigation';
import {GlobalContext} from '../context/Provider';
import {navigationRef} from './sideMenu/RootNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import loginTrue from '../context/actions/loginTrue';
import loginFalse from '../context/actions/loginFalse';
  
const AppNavContainer = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 2000);
  }, []);

  const {
    authDispatch,
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = useState({isLoggedIn});
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  const getUser = async () => {
    try {
      const student_id = await AsyncStorage.getItem('student_id');

      if (student_id) {
        setAuthLoaded(true);
        loginTrue()(authDispatch);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        loginFalse()(authDispatch);
        setIsAuthenticated(false);
      }
    } catch (error) {}
  };

  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
