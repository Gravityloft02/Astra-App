import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import colors from "../../../assets/theme/colors";
import AppStatusBar from "../StatusBar";
import styles from "./styles";

const Container = ({ style, children }) => {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <ScrollView>
          <AppStatusBar backgroundColor={colors.bgcolor} />
          <View style={[styles.wrapper, style]}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Container;
