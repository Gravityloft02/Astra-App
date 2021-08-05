import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    fontSize: 16,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 50,
  },

  loaderSection: {
    flexDirection: "row",
  },

  textInput: {
    flex: 1,
    width: "100%",
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
