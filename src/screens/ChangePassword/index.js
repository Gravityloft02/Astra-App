import React, {useContext, useEffect, useState} from 'react';
import ChangePasswordComponent from '../../components/ChangePassword';
import changePassword from '../../context/actions/changePassword';
import logoutUser from '../../context/actions/logoutUser';
import {GlobalContext} from '../../context/Provider';
import {clearChangePasswordState} from '../../context/reducers/astra';

const ChangePassword = () => {
  const [passwordForm, setPasswordForm] = useState({});
  const {authDispatch} = useContext(GlobalContext);
  const {
    paymentDispatch,
    astraState: {
      changePassword: {loading, data, error},
    },
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setPasswordForm({...passwordForm, [name]: value});
  };

  const onSubmit = () => {
    if (
      passwordForm.NewPassword &&
      passwordForm.OldPassword &&
      passwordForm.reEnter
    ) {
      if (passwordForm.NewPassword !== passwordForm.reEnter) {
        alert('Mis-match password \nCheck and re-enter');
      } else {
        changePassword(passwordForm)(paymentDispatch);
      }
    } else {
      console.log('Not not not');
    }
    console.log(passwordForm);
  };

  useEffect(() => {
    checkPassword();
  }, [data, error]);

  const checkPassword = () => {
    if (data != null) {
      const {ResponseCode, Message} = data;

      if (ResponseCode === 200) {
        alert(Message);
        clearChangePasswordState(paymentDispatch);
        logoutUser()(authDispatch);
      }
    }
  };

  return (
    <ChangePasswordComponent
      loading={loading}
      data={data}
      error={error}
      passwordForm={passwordForm}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};
export default ChangePassword;
