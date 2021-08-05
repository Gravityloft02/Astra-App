import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import {ATTENDANCE} from '../../constants/routeNames';
import Container from '../common/Container';
import Icon from '../common/Icons';
import styles from './styles';
import {Calendar} from 'react-native-calendars';

const AttendanceComponent = () => {
  const {setOptions, toggleDrawer} = useNavigation();

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
      title: ATTENDANCE,
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
  }, []);

  return (
    <Container>
      <View style={styles.card}>
        <Text
          style={{
            color: colors.golden,
            fontSize: 20,
            textAlign: 'center',
          }}>
          Overall {'\n'} Attendance
        </Text>
        <Text
          style={{
            color: colors.grey,
            fontSize: 40,
            alignSelf: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
          }}>
          :
        </Text>
        <Text
          style={{
            color: colors.golden,
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          86%
        </Text>
      </View>

      <Calendar
        disableAllTouchEventsForDisabledDays={true}
        theme={{
          calendarBackground: colors.bgcolor,
          arrowColor: colors.white,
          monthTextColor: 'white',

          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: 'red',
            },
            dayTextAtIndex6: {
              color: 'blue',
            },
          },
          'stylesheet.day.basic': {
            dayTextAtIndex0: {
              color: 'red',
            },
            dayTextAtIndex6: {
              color: 'blue',
            },
          },
        }}
        markedDates={{
          '2021-06-16': {selected: true, selectedColor: 'blue'},
          '2021-06-17': {marked: true},
          '2021-06-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2021-06-19': {disabled: true, disableTouchEvent: true},
        }}
        dayComponent={({date, state}) => {
          return (
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: state === 'disabled' ? 'gray' : 'white',
                }}>
                {date.day}
              </Text>
            </View>
          );
        }}
      />
    </Container>
  );
};
export default AttendanceComponent;
