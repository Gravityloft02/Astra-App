import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import {
  FlatList,
  LogBox,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Container from "../common/Container";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import colors from "../../assets/theme/colors";
import Icon from "../common/Icons";
import styles from "./styles";
import Message from "../common/Message";
import Card from "../common/card";
import { DASHBOARDD } from "../../constants/routeNames";

const DashboardComponent = () => {
  const { setOptions, toggleDrawer } = useNavigation();

  const data = [
    {
      className: "9A",
      id: "1",
    },
    {
      className: "9B",
      id: "2",
    },
  ];

  const ListEmptyComponent = () => {
    return (
      <Card style={styles.card}>
        <Message info message="No Records to show." />
      </Card>
    );
  };

  const renderItem = ({ item }) => {
    // console.log(item);

    const { className } = item;

    return (
      <TouchableOpacity>
        <View style={styles.card}>
          <Text style={[styles.className, { color: colors.white }]}>
            {className}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

  const announcementrenderItem = ({ item }) => {
    // console.log(item);

    const { announcementMonth } = item;
    const { announcementDate } = item;
    const { message } = item;

    return (
      <TouchableOpacity>
        <View style={styles.announcementCard}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={[styles.announcementMonth, { color: colors.white }]}>
              {announcementMonth}
            </Text>
            <Text style={[styles.announcementDate, { color: colors.white }]}>
              {announcementDate}
            </Text>
          </View>
          <Text style={[styles.announcementMessage, { color: colors.white }]}>
            {message}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const announcementData = [
    {
      announcementMonth: "May",
      announcementDate: "31",
      message: "Dance Comptition",
      id: "1",
    },
  ];

  useEffect(() => {
    setOptions({
      headerTitle: DASHBOARDD,

      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}
        >
          <MaterialIcon
            style={{ padding: 10 }}
            size={25}
            name="menu"
            color={colors.white}
          ></MaterialIcon>
        </TouchableOpacity>
      ),

      headerRight: () => (
        <View style={styles.notifAlign}>
          <TouchableOpacity>
            <Icon
              type="ionIcons"
              name="search-outline"
              color={colors.white}
              size={25}
              style={{ padding: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon
              type="ionIcons"
              name="notifications-outline"
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
    <Container>
      <View>
        <Text style={styles.titleText}>Record Today's Attendance</Text>
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            maxHeight={220}
          />
          <Text style={styles.titleText2}>Change Previous Attendance</Text>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={(item) => String(item.id)}
            maxHeight={220}
            ListEmptyComponent={ListEmptyComponent}
          />
          <Text style={styles.titleText2}>Announcements</Text>
          <FlatList
            style={styles.list}
            renderItem={announcementrenderItem}
            data={announcementData}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
          />
        </SafeAreaView>
      </View>
    </Container>
  );
};

export default DashboardComponent;
