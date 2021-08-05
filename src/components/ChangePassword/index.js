import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../assets/theme/colors';
import {CHANGE_PASSWORD} from '../../constants/routeNames';
import Icon from '../common/Icons';
import AppStatusBar from '../common/StatusBar';
import styles from './styles';

const ChangePasswordComponent = ({
  loading,
  data,
  error,
  passwordForm,
  onSubmit,
  onChange,
}) => {
  const {setOptions, toggleDrawer, navigation} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  useEffect(() => {
    setOptions({
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
      title: CHANGE_PASSWORD,
      headerRight: () => (
        <View style={styles.notifAlign}>
          <TouchableOpacity>
            <Icon
              type="ionIcons"
              name="download-outline"
              color={colors.white}
              size={25}
              style={{padding: 10}}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <ScrollView style={{padding: 15}}>
          <AppStatusBar
            backgroundColor={colors.bgcolor}
            barStyle="light-content"
          />

          <TextInput
            placeholder="Old password"
            style={styles.cardgray}
            placeholderTextColor={colors.grey}
            value={passwordForm.OldPassword || null}
            onChangeText={value => {
              onChange({name: 'OldPassword', value});
            }}
          />

          <View style={styles.cardgray}>
            <TextInput
              placeholder="New password"
              secureTextEntry={isSecureEntry}
              placeholderTextColor={colors.grey}
              style={styles.inputText}
              value={passwordForm.NewPassword || null}
              onChangeText={value => {
                onChange({name: 'NewPassword', value});
              }}
            />

            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              {isSecureEntry ? (
                <Icon
                  type="ionIcons"
                  name="eye"
                  color={colors.organce}
                  size={19}
                  padding={20}
                />
              ) : (
                <Icon
                  type="ionIcons"
                  name="eye-off"
                  color={colors.organce}
                  size={19}
                  padding={20}
                />
              )}
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Re-enter new password"
            style={styles.cardgray}
            placeholderTextColor={colors.grey}
            value={passwordForm.reEnter || null}
            onChangeText={value => {
              onChange({name: 'reEnter', value});
            }}
          />
        </ScrollView>
      </SafeAreaView>

      <View
        style={{
          position: 'relative',
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity style={styles.btnStyle} onPress={onSubmit}>
          <Text
            style={{
              alignSelf: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              fontSize: 18,
            }}>
            CONFIRM
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default ChangePasswordComponent;
