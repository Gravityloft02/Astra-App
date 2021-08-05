import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  notifAlign: {
    flexDirection: 'row',
  },
  titleText: {
    color: colors.blue,
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText2: {
    color: colors.blue,
    fontSize: 20,
    marginTop: 35,
    fontWeight: 'bold',
  },
  actionText: {
    fontSize: 15,
    color: colors.black,
  },

  actionText2: {
    fontSize: 18,
    color: colors.white,
  },

  announcementDate: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  announcementMessage: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },

  announcementMonth: {
    fontSize: 16,
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  card: {
    width: '100%',
    height: 50,
    margin: 15,
    shadowColor: colors.bgcolor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.organce,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardblue: {
    width: '100%',
    height: 60,
    margin: 15,
    shadowColor: colors.white,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardred: {
    width: '100%',
    height: 60,
    margin: 15,
    shadowColor: colors.white,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.red,
    flexDirection: 'row',
    alignItems: 'center',
  },

  announcementCard: {
    width: '100%',
    height: 60,
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

  comingsoon: {
    marginTop: 40,
    marginBottom: 40,
    fontSize: 16,
    color: colors.organce,
    fontWeight: 'bold',
  },
});
