import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    height: "100%",
    flex: 1,
    alignContent: "center",
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: colors.bgcolor,
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: colors.bgcolor,
  },
});
