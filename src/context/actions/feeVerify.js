import axiosInstance from '../../helpers/Axios';
import {
  PAYMENT_VERIFY_SUCCESS,
  PAYMENT_VERIFY_LOADING,
  PAYMENT_VERIFY_FAIL,
  PAYMENT_VERIFY_CLEAR,
} from '../../constants/actionTypes';
import {feePaymentVerify} from '../../helpers/Request';

export const clearPayVerifyState = (dispatch) => {
  dispatch({
    type: PAYMENT_VERIFY_CLEAR,
  });
};

export default (payment_id, razorPayPaymentID) => dispatch => {
  const requestPayload = {
    PaymentID: payment_id,
    RazorPayPaymentID: razorPayPaymentID,
  };

  console.log(payment_id);
  console.log(razorPayPaymentID);

  console.log(requestPayload);
  dispatch({
    type: PAYMENT_VERIFY_LOADING,
  });
  axiosInstance
    .patch(feePaymentVerify, requestPayload)
    .then(res => {
      console.log('res.data verify:>>', res.data.Data);
      dispatch({
        type: PAYMENT_VERIFY_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log('err.data verify:>>', err.response.data);
      dispatch({
        type: PAYMENT_VERIFY_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try agin'},
      });
    });
};
