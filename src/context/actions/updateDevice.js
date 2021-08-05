import {
  UPDATE_DEVICE_FAIL,
  UPDATE_DEVICE_LOADING,
  UPDATE_DEVICE_SUCCESS,
} from '../../constants/actionTypes';
import axiosInstance from '../../helpers/Axios';
import {DeviceType, update_Device} from '../../helpers/Request';

const deviceType = DeviceType;

export default deviceKey => dispatch => {
  dispatch({
    type: UPDATE_DEVICE_LOADING,
  });

  // console.log('DeviceKey Login User:>>', deviceKey);

  axiosInstance
    .patch(update_Device, {
      DeviceType: deviceType,
      DeviceKey: deviceKey,
    })
    .then(res => {
      console.log('res.data update:>>', res.data.Message);
      dispatch({
        type: UPDATE_DEVICE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log('err.data update:>>', err.response.data);
      dispatch({
        type: UPDATE_DEVICE_FAIL,
        payload: err.response.data,
      });
    });
};
