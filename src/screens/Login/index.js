import {firebase} from '@react-native-firebase/messaging';
import {useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {useContext} from 'react';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/loginUser';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      setForm({
        ...form,
        Phone: params.data.Phone,
      });
    }
  }, [params]);

  useEffect(() => {
    updateToken();
    return () => {
      setForm({});
    };
  }, []);

  const updateToken = async () => {
    try {
      const token = firebase
        .messaging()
        .getToken()
        .then(token => {
          onChange({name: 'DeviceKey', value: token});
        })
        .catch(error => {
          console.log('Login Comp: ' + error);
        });
    } catch (error) {
      console.log('Login Comp: ' + error);
      // alert(error);
    }
  };

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);


  const onSubmit = () => {
    if (form.Phone && form.Password && form.DeviceKey) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
