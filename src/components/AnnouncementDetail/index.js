import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import moment, {months} from 'moment';
import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container';
import {ANNOUNCEMENT_DETAILS} from '../../constants/routeNames';
import {navigate} from '../../navigations/sideMenu/RootNavigator';
import Icon from '../common/Icons';
import styles from './styles';
const AnnouncementDetailComponent = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const {params} = useRoute();

  useEffect(() => {
    setOptions({
      title: ANNOUNCEMENT_DETAILS,

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

          {/* <TouchableOpacity>
            <Icon
              type="ionIcons"
              name="notifications-outline"
              color={colors.white}
              size={25}
              style={{ padding: 10 }}
            />
          </TouchableOpacity> */}
        </View>
      ),
    });
  }, []);

  return (
    <Container>
      <View>
        <Text style={styles.headingText}>Notification for Students</Text>

        <Text style={styles.componentText}>{`${params.title}`}</Text>

        <Text style={styles.componentText}>From Admin</Text>

        <Text style={styles.componentText}>{`Publishing Date - ${moment(
          params.date,
        ).format('DD/MM/YYYY')}`}</Text>

        <View style={styles.backgroundLine} />

        <Text style={styles.messageText}>{`${params.message}`}</Text>
      </View>
    </Container>
  );
};
export default AnnouncementDetailComponent;
