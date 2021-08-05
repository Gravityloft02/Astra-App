import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  cardgray: {
    width: '100%',
    height: 60,
    shadowColor: colors.bgcolor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 20,
    borderRadius: 5,
    backgroundColor: colors.darkgray,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    marginBottom: 25,
    color: colors.white,
  },

  btnStyle: {
    backgroundColor: colors.organce,
    fontSize: 17,
    color: colors.black,
    height: 50,
    position: 'relative',

    justifyContent: 'center',
  },

  topSafeArea: {
    flex: 0,
    backgroundColor: colors.bgcolor,
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: colors.bgcolor,
  },

  inputText: {
    fontSize: 14,
    color: colors.white,
    flex: 1,
    height: 60
  },
});
