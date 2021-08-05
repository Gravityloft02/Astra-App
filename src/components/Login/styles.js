import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
// import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  nameImage: {
    height: 40,
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.golden,
    marginTop: -5,
    paddingBottom: 20,
  },

  subTitle: {
    fontSize: 16,
    textAlign: 'right',
    color: colors.white,
    marginRight: 30,
  },

  form: {
    paddingTop: 20,
  },

  createSection: {
    flexDirection: 'row',
  },

  infoText: {
    fontSize: 17,
  },

  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch', // or 'cover',
    justifyContent: 'center',
  },

  screenBackground: {
    resizeMode: 'cover',
    color: colors.black,
  },

  centerInBackground: {
    flex: 1,
    justifyContent: 'center',
  },

  topSafeArea: {
    flex: 0,
  },
  bottomSafeArea: {
    flex: 1,
    flexDirection: 'row',
  },

  errorStyle: {
    marginHorizontal: 30,
  },
});
