import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../constants/actionTypes';

export default () => dispatch => {
  AsyncStorage.removeItem('student_id');
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('student');
  AsyncStorage.removeItem('lastNotificaton');
  dispatch({
    type: LOGOUT_USER,
  });
};
