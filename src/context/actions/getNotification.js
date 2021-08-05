import {
  GET_NOTIFICATION_FAIL,
  GET_NOTIFICATION_LOADING,
  GET_NOTIFICATION_SUCCESS,
} from '../../constants/actionTypes';
import axiosInstance from '../../helpers/Axios';
import {get_Notification} from '../../helpers/Request';

export default dispatch => {
  dispatch({
    type: GET_NOTIFICATION_LOADING,
  });
  axiosInstance
    .get(get_Notification)
    .then(res => {
      console.log('res.data getNotification:>>', res.data.Data);
      dispatch({
        type: GET_NOTIFICATION_SUCCESS,
        payload: res.data.Data,
      });
    })
    .catch(err => {
      console.log('err.data getNotification:>>', err.response.data.Message);
      dispatch({
        type: GET_NOTIFICATION_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try agin'},
      });
    });
};
