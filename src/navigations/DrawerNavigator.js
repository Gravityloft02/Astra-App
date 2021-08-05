import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {GlobalContext} from '../context/Provider';
import SideMenu from './sideMenu';
import {DASHBOARDD} from '../constants/routeNames';
import DashboardNavigator from './DashboardNavigator';

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  const {authDispatch} = useContext(GlobalContext);

  return (
    <Drawer.Navigator
      // drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen name={DASHBOARDD} component={DashboardNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
