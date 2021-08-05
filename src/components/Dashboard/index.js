import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  LogBox,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import colors from '../../assets/theme/colors';
import Icon from '../../components/common/Icons';
import styles from './styles';
import Message from '../common/Message';
import Card from '../common/card';
import {
  ANNOUNCEMENTS,
  ANNOUNCEMENT_DETAILS,
  ATTENDANCE,
  DASHBOARDD,
  PAYFEES,
  SCORECARD,
} from '../../constants/routeNames';
import AppStatusBar from '../common/StatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {firebase} from '@react-native-firebase/messaging';
import {useFocusEffect} from '@react-navigation/native';
import CustomProgressBar from '../common/CustomProgressBar';

const DashboardComponent = ({
  naviation,
  notifData,
  notifError,
  notifLoading,
}) => {
  const {setOptions, toggleDrawer, navigate} = useNavigation();

  const [feeDueDate, setFeeDueData] = useState('');
  const [announcementDate, setannouncemntDate] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const notifList = notifData.map((category, i) => category.Notifications);

  useEffect(() => {
    displayData();
    displayNotification();
    return () => {
      setFeeDueData('');
      setFeeDueData('');
      setFeeDueData('');
      setFeeDueData('');
    };
  }, []);

  const displayNotification = async () => {
    try {
      let lastNotificaton = await AsyncStorage.getItem('lastNotificaton');
      let details = JSON.parse(lastNotificaton);
      // const [{notification}] = lastNotificaton;
      if (details) {
        const {Date, NotificationSubject, NotificationContent} = details.data;

        console.log(Date);
        setannouncemntDate(Date);
        setTitle(NotificationSubject);
        setMessage(NotificationContent);
      }
    } catch (error) {
      console.log(error);
      // alert(error);
    }
  };

  const displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('student');
      let detail = JSON.parse(user);

      if (detail) {
        setFeeDueData(detail.DueDate);

        console.log(detail);
      }
    } catch (error) {
      console.log(error);
      // alert(error);
    }
  };

  const ListEmptyComponent = () => {
    return (
      <Card style={styles.cardannouncement}>
        <Text>No Recent Announcement</Text>
      </Card>
    );
  };

  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  useEffect(() => {
    setOptions({
      title: DASHBOARDD,

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
              type="ionIcons"
              name="search-outline"
              color={colors.white}
              size={25}
              style={{padding: 10}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate(ANNOUNCEMENTS);
            }}>
            <Icon
              type="ionIcons"
              name="notifications-outline"
              color={colors.white}
              size={25}
              style={{padding: 10}}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [naviation]);

  const keyExtractor = (item, index) => index.toString();

  getData = notifData => {
    console.log(notifData.title);
    return (
      <>
        {notifData.Notifications !== undefined &&
          notifData.Notifications.length > 0 && (
            <ul>
              {notifData.Notifications.map(data => {
                return getData(data);
              })}
            </ul>
          )}
      </>
    );
  };

  const renderItem = ({item, index}) => {
    if (item != null) {
      const items = item;

      return (
        <View>
          {items.slice(0, 2).map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => {
                navigate(ANNOUNCEMENT_DETAILS, {
                  date: item.createdAt,
                  message: item.NotificationContent,
                  title: item.NotificationSubject,
                });
              }}>
              <View style={styles.announcementCard}>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[styles.announcementMonth, {color: colors.white}]}>
                    {item === '' ? '' : moment(item.createdAt).format('MMM')}
                  </Text>
                  <Text
                    style={[styles.announcementDate, {color: colors.white}]}>
                    {item.createdAt === ''
                      ? ''
                      : moment(item.createdAt).format('DD')}
                  </Text>
                </View>
                <Text
                  style={[styles.announcementMessage, {color: colors.white}]}>
                  {`${item.NotificationSubject}`}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <AppStatusBar backgroundColor={colors.bgcolor} />
        {notifLoading ? (
          <CustomProgressBar />
        ) : (
          <FlatList
            style={styles.wrapper}
            ListHeaderComponent={
              <>
                <Text style={styles.titleText}>Quick Actions</Text>

                <View style={{flexDirection: 'row'}}>
                  {/* Start Fee Payment */}
                  <TouchableOpacity
                    onPress={() => {
                      navigate(PAYFEES);
                    }}
                    style={{
                      height: 80,
                      width: '50%',
                      paddingRight: 8,
                      marginLeft: -15,
                    }}>
                    <Card style={styles.card}>
                      <Text style={styles.actionText}>Fee Payment</Text>
                      <View
                        style={{
                          marginLeft: 25,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Icon
                          type="AntDesign"
                          name="right"
                          color={colors.black}
                          size={14}
                          marginLeft={35}></Icon>
                      </View>
                    </Card>
                  </TouchableOpacity>
                  {/* End Fee Payment */}

                  {/* Start Announcements */}
                  <TouchableOpacity
                    style={{height: 80, width: '50%', paddingLeft: 8}}
                    onPress={() => {
                      //  navigation.navigate(ANNOUNCEMENTS);
                      navigate(ANNOUNCEMENTS);
                    }}>
                    <Card style={styles.card}>
                      <Text style={styles.actionText}>Announcements</Text>
                      <View
                        style={{
                          marginLeft: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Icon
                          type="AntDesign"
                          name="right"
                          color={colors.black}
                          size={14}
                          marginLeft={35}></Icon>
                      </View>
                    </Card>
                  </TouchableOpacity>
                  {/* End Announcements */}
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 16,
                    marginBottom: 16,
                  }}>
                  {/* Start Attendance */}
                  <TouchableOpacity
                    style={{
                      height: 80,
                      width: '50%',
                      paddingRight: 10,
                      marginLeft: -15,
                    }}
                    onPress={() => {
                      navigate(ATTENDANCE);
                    }}>
                    <Card style={styles.card}>
                      <Text style={styles.actionText}>Attendance</Text>
                      <View
                        style={{
                          marginLeft: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Icon
                          type="AntDesign"
                          name="right"
                          color={colors.black}
                          size={14}
                          marginLeft={35}></Icon>
                      </View>
                    </Card>
                  </TouchableOpacity>
                  {/* End Attendance */}

                  {/* Start ScoreCard */}
                  <TouchableOpacity
                    style={{height: 80, width: '50%', paddingLeft: 8}}
                    onPress={() => {
                      navigate(SCORECARD);
                    }}>
                    <Card style={styles.card}>
                      <Text style={styles.actionText}>ScoreCard</Text>
                      <View
                        style={{
                          marginLeft: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Icon
                          type="AntDesign"
                          name="right"
                          color={colors.black}
                          size={14}
                          marginLeft={35}></Icon>
                      </View>
                    </Card>
                  </TouchableOpacity>
                  {/* End ScoreCard */}
                </View>

                {/* <TouchableOpacity
          style={{ height: 60, width: "100%", marginLeft: -15, marginTop: 16 }}> */}
                <Card style={styles.cardblue}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text
                      style={[styles.announcementMonth, {color: colors.white}]}>
                      {feeDueDate === ''
                        ? ''
                        : moment(feeDueDate).format('MMM')}
                    </Text>
                    <Text
                      style={[styles.announcementDate, {color: colors.white}]}>
                      {feeDueDate === '' ? '' : moment(feeDueDate).format('DD')}
                    </Text>
                  </View>
                  <Text
                    style={[styles.announcementMessage, {color: colors.white}]}>
                    Fees Due Date
                  </Text>
                </Card>

                <Card style={styles.cardred}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text
                      style={[
                        styles.announcementMonth,
                        {color: colors.white},
                      ]}></Text>
                    <Text
                      style={[
                        styles.announcementDate,
                        {color: colors.white},
                      ]}></Text>
                  </View>
                  <Text
                    style={[styles.announcementMessage, {color: colors.white}]}>
                    Last Absent Date Coming Soon
                  </Text>
                </Card>

                <Text style={styles.titleText2}>Recent Announcements</Text>
              </>
            }
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            data={notifData ? notifList : ListEmptyComponent}
            ListEmptyComponent={ListEmptyComponent}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default DashboardComponent;
