import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginTop: 5,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
  },

  icon: {
    height: 20,
    width: 20,
    color: colors.golden,
    tintColor: colors.golden,
  },

  inputContainer: {
    paddingVertical: 12,
  },

  textInput: {
    paddingLeft: 10,
    flex: 1,
    color: colors.focusgolden,
    width: "100%",
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
    paddingLeft: 5,
  },

  iconPadding: {
    paddingVertical: 20,
  },
});
