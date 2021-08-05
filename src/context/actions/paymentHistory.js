import {
  PAYMENT_HISTORY_FAIL,
  PAYMENT_HISTORY_LOADING,
  PAYMENT_HISTORY_SUCCESS,
} from '../../constants/actionTypes';
import axiosInstance from '../../helpers/Axios';
import {payment_History} from '../../helpers/Request';

export default dispatch => {
  dispatch({
    type: PAYMENT_HISTORY_LOADING,
  });
  axiosInstance
    .get(payment_History)
    .then(res => {
      console.log('res.data payHistory:>>', res.data.Data);
      dispatch({
        type: PAYMENT_HISTORY_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log('err.data payHistory:>>', err.response.data.Message);
      dispatch({
        type: PAYMENT_HISTORY_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try agin'},
      });
    });
};
