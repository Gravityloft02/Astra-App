import { StackActions, useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import colors from "../../assets/theme/colors";
import Card from "../../components/common/card";
import Container from "../../components/common/Container";
import Icon from "../../components/common/Icons";
import {
  ANNOUNCEMENTS,
  DASHBOARDD,
  SCORECARD,
} from "../../constants/routeNames";
import { navigate } from "../../navigations/sideMenu/RootNavigator";
import styles from "./styles";

const ScoreCard = () => {
  const { setOptions, toggleDrawer, dispatch, navigate } = useNavigation();

  const pushAction = StackActions.push({
    routeName: ANNOUNCEMENTS,
  });
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}
        >
          <Icon
            style={{ padding: 10 }}
            size={25}
            name="menu"
            type="materialIcon"
            color={colors.white}
          ></Icon>
        </TouchableOpacity>
      ),

      headerTitleStyle: { alignSelf: "center" },
      headerRight: () => (
        <View style={styles.notifAlign}>
          <TouchableOpacity>
            <Icon
              type="ionIcons"
              name="ellipsis-vertical"
              color={colors.white}
              size={25}
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <Container style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          marginTop={60}
          height={20}
          width={20}
          source={require("../../assets/images/comingsoon.png")}
        />

        <Text style={styles.comingsoon}>Coming soon!</Text>

        <TouchableOpacity
          style={{
            height: 50,
            width: "70%",
            paddingLeft: 8,
            marginTop: 15,
            marginBottom: 15,
            marginLeft: -30,
          }}
          onPress={() => {
            // navigate(pushAction);
            navigate(DASHBOARDD);
          }}
        >
          <Card style={styles.card}>
            <Text style={styles.actionText}>Back to Dashboard</Text>
          </Card>
        </TouchableOpacity>


        
      </View>
    </Container>
  );
};

export default ScoreCard;
