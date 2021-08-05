import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
  notifAlign: {
    flexDirection: 'row',
  },
  card: {
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
    shadowColor: colors.bgcolor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 5,
    backgroundColor: colors.darkgray,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
