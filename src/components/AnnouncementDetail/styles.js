import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

const commonMarginTop = 8;
const commonMarginBottom = 8;

export default StyleSheet.create({
  notifAlign: {
    flexDirection: "row",
  },
  headingText: {
    color: colors.white,
    fontSize: 18,
    marginTop: commonMarginTop,
    marginBottom: commonMarginBottom,
  },

  componentText: {
    color: colors.lightgrey,
    fontSize: 16,
    marginTop: commonMarginTop,
    fontStyle: "italic",
    marginBottom: commonMarginBottom,
  },

  // backgroundline: {
  //   color: colors.grey,
  //   height: 5,
  //   width: "100%",
  //   marginTop: 15,
  //   marginBottom: 15,
  // },

  backgroundLine: {
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: colors.dimgrey,
    height: 2,
  },

  messageText: {
    color: colors.white,
    fontSize: 20,
    paddingRight: 55,
  },
});
