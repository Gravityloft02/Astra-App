import {
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_SUCCESS,
} from '../../constants/actionTypes';
import axiosInstance from '../../helpers/Axios';
import {change_Password} from '../../helpers/Request';

export default ({OldPassword, NewPassword}) =>
  dispatch => {
    const requestPayload = {
      OldPassword,
      NewPassword,
    };
    console.log(requestPayload);

    dispatch({
      type: CHANGE_PASSWORD_LOADING,
    });

    axiosInstance
      .patch(change_Password, requestPayload)
      .then(res => {
        console.log('res.data changePassword:>>', res.data.Data);
        dispatch({
          type: CHANGE_PASSWORD_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        console.log('err.data changePassword:>>', err.response.data.ResponseCode);
        dispatch({
          type: CHANGE_PASSWORD_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try agin'},
        });
      });
  };
