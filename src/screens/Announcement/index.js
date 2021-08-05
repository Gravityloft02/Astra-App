import React, {useContext, useEffect} from 'react';
import AnnouncementComponent from '../../components/Announcement';
import getNotification from '../../context/actions/getNotification';
import {GlobalContext} from '../../context/Provider';

const Announcements = () => {
  const {
    paymentDispatch,
    astraState: {
      getNotification: {notifData, notifError, notifLoading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getNotificationList();
  }, []);

  const getNotificationList = () => {
    getNotification(paymentDispatch);
  };

  return (
    <AnnouncementComponent
      notifData={notifData}
      notifError={notifError}
      notifLoading={notifLoading}
    />
  );
};

export default Announcements;
