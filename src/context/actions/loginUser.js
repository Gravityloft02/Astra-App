import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
  CLEAR_AUTH_STATE,
} from '../../constants/actionTypes';
import axiosInstance from '../../helpers/Axios';
import {DeviceType, parentAuthentication} from '../../helpers/Request';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

const deviceType = DeviceType;

export default ({Phone, Password, DeviceKey}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });

    console.log('DeviceKey Login User:>>', DeviceKey);

    axiosInstance
      .post(parentAuthentication, {
        Phone,
        Password,
        DeviceType: deviceType,
        DeviceKey,
      })
      .then(res => {
        AsyncStorage.setItem('token', res.data.Data.Token);
        AsyncStorage.setItem('student', JSON.stringify(res.data.Data));
        AsyncStorage.setItem(
          'student_id',
          JSON.stringify(res.data.Data.StudentID),
        );
        console.log('res.data login:>>', res.data.Data);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        console.log('err.data login :>>', err.response.data);
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try agin'},
        });
      });
  };
