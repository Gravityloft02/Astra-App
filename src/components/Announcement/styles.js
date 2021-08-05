import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  notifAlign: {
    flexDirection: 'row',
  },
  titleText: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  titleText2: {
    color: colors.blue,
    fontSize: 18,
    marginTop: 15,
    fontWeight: 'bold',
  },
  className: {
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  announcementDate: {
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  announcementMessage: {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },

  announcementMonth: {
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 40,
    borderRadius: 10,
    marginTop: 25,
    width: 150,
    height: 80,
    backgroundColor: colors.darkgray,
  },

  card: {
    width: '100%',
    height: 60,
    shadowColor: colors.bgcolor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.darkgray,
    flexDirection: 'row',
    alignItems: 'center',
  },

  announcementCard: {
    width: '100%',
    height: 50,
    marginTop: 15,
    marginBottom: 15,
    shadowColor: colors.bgcolor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.darkgray,
    alignItems: 'center',
    flexDirection: 'row',
  },

  list: {
    marginBottom: 30,
  },

  topSafeArea: {
    flex: 0,
    backgroundColor: colors.bgcolor,
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: colors.bgcolor,
  },

  wrapper: {
    margin: 20,
    height: '100%',
    flex: 1,
    alignContent: 'center',
  },
});
