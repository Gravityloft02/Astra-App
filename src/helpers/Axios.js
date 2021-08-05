import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {LOGOUT} from '../constants/routeNames';
import logoutUser from '../context/actions/logoutUser';
import {navigate} from '../navigations/sideMenu/RootNavigator';

const headers = {
  'Content-Type': 'application/json',
};
const axiosInstance = axios.create({
  baseURL: 'http://3.108.135.193:9797/api/',
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  error => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.ResponseCode === 403) {
      alert('Your session has been expired.');
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;
