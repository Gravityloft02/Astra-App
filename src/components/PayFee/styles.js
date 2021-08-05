import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

const cMarginTop = 10;
const cMarginBottom = 10;

export default StyleSheet.create({
  notifAlign: {
    flexDirection: 'row',
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'flex-end',
  },
  userText: {
    fontSize: 17,
    color: colors.white,
    marginTop: cMarginTop,
    marginBottom: cMarginBottom,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },

  totalFee: {
    fontSize: 16,
    color: colors.white,
  },

  paidText: {
    fontSize: 12,
    color: colors.black,
    justifyContent: 'center',
  },

  remainingFee: {
    fontSize: 16,
    color: colors.red,
  },

  paidFee: {
    fontSize: 16,
    color: colors.organce,
  },

  titleText: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: cMarginTop,
    marginBottom: cMarginBottom,
  },

  announcementDate: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  announcementMessage: {
    fontSize: 16,
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

  cardred: {
    width: '100%',
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: colors.bgcolor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 7,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 12,
    borderRadius: 7,
    backgroundColor: colors.red,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardgray: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    shadowColor: colors.bgcolor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 7,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 25,
    borderRadius: 7,
    backgroundColor: colors.darkgray,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  cardgray2: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    shadowColor: colors.bgcolor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 7,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 25,
    borderRadius: 7,
    backgroundColor: colors.darkgray,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  cardligtgray: {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    shadowColor: colors.bgcolor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 7,
    shadowOpacity: 0.26,
    elevation: 8,
    borderRadius: 7,
    backgroundColor: colors.dimgrey,
    flexDirection: 'row',
    justifyContent: 'center',
    color: colors.white,
    fontSize: 17,
    paddingLeft: 10,
  },

  btnPay: {
    height: 20,
    width: '40%',
    marginTop: cMarginTop,
    marginBottom: cMarginBottom,
    marginLeft: 10,
    borderRadius: 2,
  },

  btnDownload: {
    color: colors.black,
    backgroundColor: colors.organce,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 2,
  },

  backgroundLine: {
    marginTop: 5,
    marginBottom: 30,
    backgroundColor: colors.grey,
    height: 0.5,
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

  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
