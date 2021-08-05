import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '@react-native-firebase/messaging';
import {useFocusEffect} from '@react-navigation/native';
import {from} from 'form-data';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import DashboardComponent from '../../components/Dashboard';
import getNotification from '../../context/actions/getNotification';
import logoutUser from '../../context/actions/logoutUser';
import updateDevice from '../../context/actions/updateDevice';
import {GlobalContext} from '../../context/Provider';

const Dashboard = () => {
  const {
    paymentDispatch,
    astraState: {
      updateDevice: {loading, error},
      getNotification: {notifData, notifError, notifLoading},
    },
  } = useContext(GlobalContext);
  const {authDispatch} = useContext(GlobalContext);

  useEffect(() => {
    updateKey();
    getNotificationList();
  }, []);

  const updateKey = async () => {
    try {
      firebase
        .messaging()
        .getToken()
        .then(deviceKey => {
          updateDevice(deviceKey)(paymentDispatch);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      checkToken();
    }, [error, authDispatch]),
  );

  const getNotificationList = () => {
    getNotification(paymentDispatch);
  };

  const checkToken = () => {
    if (error != null) {
      const {ResponseCode} = error;
      if (ResponseCode === 403) {
        logoutUser()(authDispatch);
        alert('Your session has been expired.');
      }
    }
  };

  return (
    <DashboardComponent
      notifData={notifData}
      notifError={notifError}
      notifLoading={notifLoading}
    />
  );
};

export default Dashboard;
