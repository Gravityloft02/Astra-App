import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import Dashboard from "../screens/Dashboard";
import {
  DASHBOARDD,
  ANNOUNCEMENTS,
  SETTINGS,
  SCORECARD,
  ANNOUNCEMENT_DETAILS,
  PAYFEES,
  CHANGE_PASSWORD,
  ATTENDANCE,
} from "../constants/routeNames";
import colors from "../assets/theme/colors";
import Announcements from "../screens/Announcement";
import ScoreCard from "../screens/ScoreCard";
import AnnouncementDetail from "../screens/AnnouncementDetail";
import PayFee from "../screens/Payfees";
import ChangePassword from "../screens/ChangePassword";
import Attendance from "../screens/Attendance";
import Settings from "../screens/Settings";

const HeaderOptions = () => {
  return {
    headerStyle: {
      backgroundColor: colors.black,
    },
    headerTintColor: colors.white,
    headerTitleStyle: { alignSelf: "center" },
  };
};

const SettingNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={SETTINGS}>
      <HomeStack.Screen
        name={DASHBOARDD}
        component={Dashboard}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={ANNOUNCEMENTS}
        component={Announcements}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={SETTINGS}
        component={Settings}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={SCORECARD}
        component={ScoreCard}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={ANNOUNCEMENT_DETAILS}
        component={AnnouncementDetail}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={PAYFEES}
        component={PayFee}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={CHANGE_PASSWORD}
        component={ChangePassword}
        options={HeaderOptions}
      />
      <HomeStack.Screen
        name={ATTENDANCE}
        component={Attendance}
        options={HeaderOptions}
      />
    </HomeStack.Navigator>
  );
};

export default SettingNavigator;
