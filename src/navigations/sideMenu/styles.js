import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },

  userImage: {
    height: 55,
    width: 55,
    borderRadius: 30,
    borderColor: colors.white,
    borderWidth: 0.2,
    justifyContent: 'flex-end',
  },

  item: {
    marginTop: 20,
    flexDirection: 'row',
    // justifyContent: "center",
    alignItems: 'center',
  },

  itemText: {
    fontSize: 17,
    paddingVertical: 7,
    color: colors.white,
    paddingLeft: 20,
  },

  itemHeadingText: {
    fontSize: 20,
    marginTop: 10,
    paddingVertical: 7,
    color: colors.golden,
    alignSelf: 'center',
  },

  background: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    height: '100%',
    width: '100%',
  },

  backgroundLine: {
    marginTop: 25,
    backgroundColor: colors.grey,
    height: 0.5,
  },

  alignBottom: {
    justifyContent: 'flex-end',
  },

  headerText: {
    fontSize: 17,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: colors.white,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  selectedTabColor: {
    color: colors.golden,
  },
});
