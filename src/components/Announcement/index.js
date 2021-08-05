import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  LogBox,
  Modal,
  SafeAreaView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/theme/colors';
import Icon from '../../components/common/Icons';
import styles from './styles';
import Message from '../common/Message';
import Card from '../common/card';
import {ANNOUNCEMENTS, ANNOUNCEMENT_DETAILS} from '../../constants/routeNames';
import {navigate} from '../../navigations/sideMenu/RootNavigator';
import moment from 'moment';

const AnnouncementComponent = ({notifData, notifLoading, notifError}) => {
  const {setOptions, toggleDrawer} = useNavigation();

  // const transformed = data.Data.map(({Month, Notifications}) => ({
  //   title: Month,
  //   data: Notifications,
  // }));
  // console.log(transformed);

  let JanData = [
    {
      announcementMonth: 'Jan',
      announcementDate: '20',
      message: 'Dance Comptition',
      id: '1',
    },
    {
      announcementMonth: 'May',
      announcementDate: '31',
      message: 'Dance Comptition',
      id: '2',
    },
    {
      announcementMonth: 'May',
      announcementDate: '31',
      message: 'Dance Comptition',
      id: '3',
    },
  ];

  let MarData = [
    {
      announcementMonth: 'Mar',
      announcementDate: '20',
      message: 'Dance Comptition',
      id: '4',
    },
    {
      announcementMonth: 'Mar',
      announcementDate: '31',
      message: 'Dance Comptition',
      id: '5',
    },
    {
      announcementMonth: 'Mar',
      announcementDate: '31',
      message: 'Dance Comptition',
      id: '6',
    },
  ];

  let DecData = [
    {
      announcementMonth: 'Dec',
      announcementDate: '20',
      message: 'Dance Comptition',
      id: '7',
    },
    {
      announcementMonth: 'Dec',
      announcementDate: '31',
      message: 'Dance Comptition',
      id: '8',
    },
    {
      announcementMonth: 'Dec',
      announcementDate: '31',
      message: 'Dance Comptition',
      id: '9',
    },
  ];

  const ListEmptyComponent = () => {
    return (
      <Card style={styles.card}>
        <Message info message="No Announement Record." />
      </Card>
    );
  };

  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <MaterialIcon
            style={{padding: 10}}
            size={25}
            name="menu"
            color={colors.white}></MaterialIcon>
        </TouchableOpacity>
      ),
      title: ANNOUNCEMENTS,
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
        </View>
      ),
    });
  }, []);

  const CustomProgressBar = ({visible}) => (
    <Modal onRequestClose={() => null} visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.bgcolor,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{borderRadius: 10, backgroundColor: '#494949', padding: 25}}>
          <Text style={{fontSize: 20, fontWeight: '200', color: colors.white}}>
            Loading
          </Text>
          <ActivityIndicator size="large" color="#E2B66E" />
        </View>
      </View>
    </Modal>
  );

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.wrapper}>
          {notifLoading ? (
            <CustomProgressBar />
          ) : (
            <SectionList
              sections={notifData.map(({Month, Notifications}) => ({
                title: Month,
                data: Notifications,
              }))}
              renderSectionHeader={({section}) => (
                <Text style={styles.titleText}>{section.title}</Text>
              )}
              ListEmptyComponent={ListEmptyComponent}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    height: 60,
                    width: '100%',
                    marginTop: 8,
                    marginBottom: 8,
                  }}
                  onPress={() => {
                    navigate(ANNOUNCEMENT_DETAILS, {
                      date: item.createdAt,
                      message: item.NotificationContent,
                      title: item.NotificationSubject,
                    });
                  }}>
                  <Card style={styles.card}>
                    <View
                      style={{flexDirection: 'column', alignItems: 'center'}}>
                      <Text
                        style={[
                          styles.announcementMonth,
                          {color: colors.white},
                        ]}>
                        {moment(item.createdAt).format('MMM')}
                      </Text>
                      <Text
                        style={[
                          styles.announcementDate,
                          {color: colors.white},
                        ]}>
                        {moment(item.createdAt).format('DD')}
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.announcementMessage,
                        {color: colors.white},
                      ]}>
                      {item.NotificationSubject}
                    </Text>
                  </Card>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => item._id}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default AnnouncementComponent;
