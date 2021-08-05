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
import Attendance from "../screens/Attendance";
import ChangePassword from "../screens/ChangePassword";
import PayFee from "../screens/Payfees";
import AnnouncementDetail from "../screens/AnnouncementDetail";
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

const payFeeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={PAYFEES}>
      <HomeStack.Screen
        name={DASHBOARDD}
        component={Dashboard}
        options={HeaderOptions}
        initialRouteName={DASHBOARDD}
      />
      <HomeStack.Screen
        name={ANNOUNCEMENTS}
        component={Announcements}
        options={HeaderOptions}
        initialRouteName={ANNOUNCEMENTS}
      />
      <HomeStack.Screen
        name={SETTINGS}
        component={Settings}
        options={HeaderOptions}
        initialRouteName={SETTINGS}
      />
      <HomeStack.Screen
        name={SCORECARD}
        component={ScoreCard}
        options={HeaderOptions}
        initialRouteName={SCORECARD}
      />
      <HomeStack.Screen
        name={ANNOUNCEMENT_DETAILS}
        component={AnnouncementDetail}
        options={HeaderOptions}
        initialRouteName={ANNOUNCEMENT_DETAILS}
      />
      <HomeStack.Screen
        name={PAYFEES}
        component={PayFee}
        options={HeaderOptions}
        initialRouteName={PAYFEES}
      />
      <HomeStack.Screen
        name={CHANGE_PASSWORD}
        component={ChangePassword}
        options={HeaderOptions}
        initialRouteName={CHANGE_PASSWORD}
      />
      <HomeStack.Screen
        name={ATTENDANCE}
        component={Attendance}
        options={HeaderOptions}
        initialRouteName={ATTENDANCE}
      />
    </HomeStack.Navigator>
  );
};

export default payFeeNavigator;
