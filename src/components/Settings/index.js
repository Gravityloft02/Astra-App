import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../assets/theme/colors';
import {CHANGE_PASSWORD, SETTINGS} from '../../constants/routeNames';
import Container from '../common/Container';
import Icon from '../common/Icons';
import styles from './styles';
import {Linking} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingComponent = () => {
  const {setOptions, toggleDrawer, navigate} = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    displayData();
    return () => {
      setPhoneNumber({});
    };
  }, []);

  const displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('student');
      let detail = JSON.parse(user);

      setPhoneNumber(detail.HelpContactNo);

      console.log(detail);
    } catch (error) {
      console.log(error);
      // alert(error);
    }
  };

  useEffect(() => {
    setOptions({
      title: SETTINGS,

      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon
            style={{padding: 10}}
            size={25}
            name="menu"
            type="materialIcon"
            color={colors.white}></Icon>
        </TouchableOpacity>
      ),

      headerRight: () => (
        <View style={styles.notifAlign}>
          <TouchableOpacity>
            <Icon
              type="MaterialCommunityIcons"
              name="bell-ring-outline"
              color={colors.white}
              size={25}
              style={{padding: 10}}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <Container>
      <View style={styles.backgroundLine} />

      <TouchableOpacity
        onPress={() => {
          navigate(CHANGE_PASSWORD);
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textStyle}>Change Password</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              flex: 1,
              alignItems: 'center',
              marginRight: 20,
            }}>
            <Icon
              type="AntDesign"
              name="right"
              color={colors.white}
              size={18}
            />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.backgroundLine} />

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`tel:${phoneNumber}`);
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textStyle}>Help</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              flex: 1,
              alignItems: 'center',
              marginRight: 20,
            }}>
            <Text style={styles.textStyle2}>{`Call ${phoneNumber}`}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.backgroundLine} />
    </Container>
  );
};
export default SettingComponent;
