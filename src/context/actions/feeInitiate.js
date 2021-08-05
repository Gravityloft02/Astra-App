import axiosInstance from '../../helpers/Axios';
import {
  PAYMENT_INITIATE_CLEAR,
  PAYMENT_INITIATE_FAIL,
  PAYMENT_INITIATE_LOADING,
  PAYMENT_INITIATE_SUCCESS,
} from '../../constants/actionTypes';
import {feePaymentInitiate} from '../../helpers/Request';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearPayIniState = () => (dispatch) => {
  dispatch({
    type: PAYMENT_INITIATE_CLEAR,
  });
};

export default ({amount, StudentID}) =>
  dispatch => {
    const Amount = parseInt(amount);

    const requestPayload = {
      Amount,
      StudentID,
    };
    dispatch({
      type: PAYMENT_INITIATE_LOADING,
    });
    axiosInstance
      .post(feePaymentInitiate, requestPayload)
      .then(res => {
        console.log('res.data feeIni:>>', res.data.Data);
        dispatch({
          type: PAYMENT_INITIATE_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        console.log('err.data feeIni:>>', err.response.data.Message);
        dispatch({
          type: PAYMENT_INITIATE_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try agin'},
        });
      });
  };
