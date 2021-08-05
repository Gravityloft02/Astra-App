import React, {useContext, useEffect, useState} from 'react';
import {Image, View, Text, ImageBackground, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container';
import Icon from '../../components/common/Icons';
import {StackActions} from '@react-navigation/core';
import {
  ANNOUNCEMENTS,
  ATTENDANCE,
  DASHBOARDD,
  LOGIN,
  LOGOUT,
  PAYFEES,
  SETTINGS,
} from '../../constants/routeNames';
import logoutUser from '../../context/actions/logoutUser';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '@react-native-firebase/messaging';
import {GlobalContext} from '../../context/Provider';
import {navigate} from './RootNavigator';

const SideMenu = ({navigation, authDispatch}) => {
  const [parentName, setParentName] = useState('');
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  useEffect(() => {
    displayData();
    const unsubscribe = firebase.messaging().onMessage(async remoteMessage => {
      AsyncStorage.setItem('lastNotificaton', JSON.stringify(remoteMessage));
      Alert.alert(
        'A new announcement arrived!',
        `${remoteMessage.data.NotificationSubject}
${remoteMessage.data.NotificationContent}`,
        [
          {
            text: 'OK',
            onPress: () =>
              navigation.dispatch(StackActions.replace(DASHBOARDD)),
          },
        ],
      );
    });

    return () => {
      unsubscribe;
      setParentName({});
    };
  }, []);

  const displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('student');

      if (user !== null) {
        let detail = JSON.parse(user);

        if (detail !== null) {
          setParentName(detail.ParentName);

          console.log(detail);
        }
      }
    } catch (error) {
      console.log(error);
      // alert(error);
    }
  };

  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Do want Logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: (
        <Icon
          type="ionIcons"
          size={20}
          color={colors.white}
          name="home-outline"></Icon>
      ),
      name: 'Dashboard',
      onPress: () => {
        navigation.dispatch(StackActions.replace(DASHBOARDD));
        navigation.closeDrawer();
      },
    },
    {
      icon: (
        <Icon
          type="ionIcons"
          size={20}
          color={colors.white}
          name="wallet-outline"></Icon>
      ),
      name: 'Fee payments',
      onPress: () => {
        navigation.dispatch(StackActions.replace(PAYFEES));
        navigation.closeDrawer();
      },
    },
    {
      icon: (
        <Icon
          type="simpleLineIcon"
          size={20}
          color={colors.white}
          name="graduation"></Icon>
      ),
      name: 'Attendance',
      onPress: () => {
        navigation.dispatch(StackActions.replace(ATTENDANCE));
        navigation.closeDrawer();
      },
    },
    {
      icon: (
        <Icon
          type="AntDesign"
          name="profile"
          size={20}
          color={colors.white}></Icon>
      ),
      name: 'Announcements',
      onPress: () => {
        navigation.dispatch(StackActions.replace(ANNOUNCEMENTS));
        navigation.closeDrawer();
      },
    },
    {
      icon: (
        <Icon
          type="ionIcons"
          name="md-settings-outline"
          size={20}
          color={colors.white}></Icon>
      ),
      name: 'Settings',
      onPress: () => {
        navigation.dispatch(StackActions.replace(SETTINGS));
        navigation.closeDrawer();
      },
    },
  ];

  return (
    <ImageBackground style={styles.background}>
      <Container>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'baseline',
          }}>
          <Image
            height={100}
            width={100}
            source={require('../../assets/images/logo.png')}
            style={styles.userImage}
          />

          <View style={{flexDirection: 'column', alignSelf: 'center'}}>
            <Text style={{fontSize: 15, color: colors.white, paddingLeft: 20}}>
              Welcome
            </Text>
            <Text style={styles.headerText}>{`${parentName}`}</Text>
          </View>
        </View>

        <View style={styles.backgroundLine}></View>

        <View style={{marginLeft: 5, marginTop: 20}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.alignBottom}>
          <Image
            height={20}
            width={20}
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
          />

          <Text style={styles.itemHeadingText}>Astra Parent Connect</Text>

          <TouchableOpacity
            style={{alignSelf: 'center', marginTop: 15}}
            onPress={handleLogout}>
            <Text style={styles.itemText}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </ImageBackground>
  );
};

export default SideMenu;
