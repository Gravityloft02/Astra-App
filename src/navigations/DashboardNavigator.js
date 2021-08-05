import React, {useEffect, useState} from 'react';
import {
  createStackNavigator,
  TransitionPreset,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import {
  DASHBOARDD,
  ANNOUNCEMENTS,
  SETTINGS,
  SCORECARD,
  ANNOUNCEMENT_DETAILS,
  PAYFEES,
  CHANGE_PASSWORD,
  ATTENDANCE,
} from '../constants/routeNames';
import colors from '../assets/theme/colors';
import Announcements from '../screens/Announcement';
import ScoreCard from '../screens/ScoreCard';
import AnnouncementDetail from '../screens/AnnouncementDetail';
import PayFee from '../screens/Payfees';
import Settings from '../screens/Settings';
import ChangePassword from '../screens/ChangePassword';
import Attendance from '../screens/Attendance';
import {Easing} from 'react-native-reanimated';
import {firebase} from '@react-native-firebase/messaging';
import {navigate} from './sideMenu/RootNavigator';
import {useNavigation} from '@react-navigation/native';

const HeaderOptions = () => {
  return {
    headerStyle: {
      backgroundColor: colors.black,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {alignSelf: 'center'},
  };
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

// const initialState = {
//   index: 0,
//   routes: [{key: DASHBOARDD, routeName: DASHBOARDD}],
// };

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const DashboardNavigator = () => {
  const HomeStack = createStackNavigator();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [initialState, setInitialRoute] = useState(DASHBOARDD);

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    checkNotification();

    return () => {
      setInitialRoute({});
    };
  }, []);

  const checkNotification = () => {
    firebase.messaging().onNotificationOpenedApp(remoteMessage => {
      // console.log(
      //   'Notification caused app to open from background state:',
      //   remoteMessage.notification,
      // );
      navigation.navigate(ANNOUNCEMENTS);
    });

    // Check whether an initial notification is available
    firebase
      .messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );

          setInitialRoute(ANNOUNCEMENTS); // e.g. "Settings"
        }
        setLoading(false);
      });
  };

  if (loading) {
    return null;
  }

  return (
    <HomeStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        //transitionSpec: { open: config, close: closeConfig },
        //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="float"
      animation="fade"
      initialRouteName={initialState}>
      <HomeStack.Screen
        name={DASHBOARDD}
        component={Dashboard}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={ANNOUNCEMENTS}
        component={Announcements}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={SETTINGS}
        component={Settings}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={SCORECARD}
        component={ScoreCard}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={ANNOUNCEMENT_DETAILS}
        component={AnnouncementDetail}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={PAYFEES}
        component={PayFee}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={CHANGE_PASSWORD}
        component={ChangePassword}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={ATTENDANCE}
        component={Attendance}
        options={HeaderOptions}
      />
    </HomeStack.Navigator>
  );
};

export default DashboardNavigator;
