import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';


export default StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    height: '100%',
    flex: 1,
    alignContent: 'center',
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: colors.bgcolor,
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: colors.bgcolor,
  },

  notifAlign: {
    flexDirection: 'row',
  },
  titleText: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleText2: {
    color: colors.blue,
    fontSize: 16,
    marginTop: 35,
    fontWeight: 'bold',
  },
  actionText: {
    fontSize: 14,
    color: colors.black,
  },

  actionText2: {
    fontSize: 14,
    color: colors.white,
  },

  announcementDate: {
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  announcementMessage: {
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },

  announcementMonth: {
    fontSize: 14,
    alignItems: 'center',
    fontWeight: 'bold',
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
    height: 80,
    margin: 15,
    shadowColor: colors.bgcolor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.36,
    elevation: 8,
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.organce,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },

  cardannouncement: {
    width: '100%',
    height: 60,
    marginTop: 15,
    shadowColor: colors.bgcolor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.36,
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
    marginTop: 30,
    shadowColor: colors.bgcolor,
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
    marginTop: 30,
    shadowColor: colors.bgcolor,
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
    shadowOpacity: 0.36,
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
});
