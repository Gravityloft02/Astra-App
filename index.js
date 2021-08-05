/**
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '@react-native-firebase/messaging';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

firebase.messaging().setBackgroundMessageHandler(async remoteMessage => {
  AsyncStorage.setItem('lastNotificaton', JSON.stringify(remoteMessage));
});



AppRegistry.registerComponent(appName, () => App);
