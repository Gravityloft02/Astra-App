import {
  CHANGE_PASSWORD_CLEAR_AUTH,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_SUCCESS,
  GET_NOTIFICATION_FAIL,
  GET_NOTIFICATION_LOADING,
  GET_NOTIFICATION_SUCCESS,
  PAYMENT_HISTORY_FAIL,
  PAYMENT_HISTORY_LOADING,
  PAYMENT_HISTORY_SUCCESS,
  PAYMENT_INITIATE_CLEAR,
  PAYMENT_INITIATE_FAIL,
  PAYMENT_INITIATE_LOADING,
  PAYMENT_INITIATE_SUCCESS,
  PAYMENT_VERIFY_CLEAR,
  PAYMENT_VERIFY_FAIL,
  PAYMENT_VERIFY_LOADING,
  PAYMENT_VERIFY_SUCCESS,
  UPDATE_DEVICE_FAIL,
  UPDATE_DEVICE_LOADING,
  UPDATE_DEVICE_SUCCESS,
} from '../../constants/actionTypes';

export const clearChangePasswordState = () => dispatch => {
  dispatch({
    type: CHANGE_PASSWORD_CLEAR_AUTH,
  });
};

const payment = (state, {type, payload}) => {
  switch (type) {
    case PAYMENT_INITIATE_LOADING:
      return {
        ...state,
        feeInitiate: {
          ...state.feeInitiate,
          loading: true,
          error: null,
        },
      };

    case PAYMENT_INITIATE_SUCCESS:
      return {
        ...state,
        feeInitiate: {
          ...state.feeInitiate,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case PAYMENT_INITIATE_FAIL:
      return {
        ...state,
        feeInitiate: {
          ...state.feeInitiate,
          loading: false,
          error: payload,
        },
      };

    case PAYMENT_INITIATE_CLEAR:
      return {
        ...state,
        feeInitiate: {
          ...state.feeInitiate,
          loading: false,
          error: null,
          data: null,
        },
      };

    case PAYMENT_VERIFY_LOADING:
      return {
        ...state,
        feeVerify: {
          ...state.feeVerify,
          verifyLoading: true,
          verifyError: null,
        },
      };

    case PAYMENT_VERIFY_SUCCESS:
      return {
        ...state,
        feeVerify: {
          ...state.feeVerify,
          verifyLoading: false,
          verifyData: payload,
          erverifyErrorror: null,
        },
      };

    case PAYMENT_VERIFY_FAIL:
      return {
        ...state,
        feeVerify: {
          ...state.feeVerify,
          verifyLoading: false,
          verifyError: payload,
        },
      };

    case PAYMENT_VERIFY_CLEAR:
      return {
        ...state,
        feeVerify: {
          ...state.feeVerify,
          verifyLoading: false,
          verifyError: null,
          verifyData: null,
        },
      };

    case UPDATE_DEVICE_LOADING:
      return {
        ...state,
        updateDevice: {
          ...state.updateDevice,
          loading: true,
          error: null,
        },
      };

    case UPDATE_DEVICE_SUCCESS:
      return {
        ...state,
        updateDevice: {
          ...state.updateDevice,
          loadingd: false,
          data: payload,
          error: null,
        },
      };

    case UPDATE_DEVICE_FAIL:
      return {
        ...state,
        updateDevice: {
          ...state.updateDevice,
          loading: false,
          error: payload,
        },
      };

    case PAYMENT_HISTORY_LOADING:
      return {
        ...state,
        paymentHistory: {
          ...state.paymentHistory,
          pHistoryLoading: true,
          pHistoryError: null,
        },
      };

    case PAYMENT_HISTORY_SUCCESS:
      return {
        ...state,
        paymentHistory: {
          ...state.paymentHistory,
          pHistoryLoading: false,
          pHistoryData: payload,
          pHistoryError: null,
        },
      };

    case PAYMENT_HISTORY_FAIL:
      return {
        ...state,
        paymentHistory: {
          ...state.paymentHistory,
          pHistoryLoading: false,
          pHistoryError: payload,
        },
      };

    case CHANGE_PASSWORD_LOADING:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: true,
          error: null,
        },
      };

    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case CHANGE_PASSWORD_CLEAR_AUTH:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: false,
          data: null,
          error: null,
        },
      };

    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: false,
          error: payload,
        },
      };

    case GET_NOTIFICATION_LOADING:
      return {
        ...state,
        getNotification: {
          ...state.getNotification,
          notifLoading: true,
          notifError: null,
        },
      };

    case GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        getNotification: {
          ...state.getNotification,
          notifLoading: false,
          notifData: payload,
          notifError: null,
        },
      };

    case GET_NOTIFICATION_FAIL:
      return {
        ...state,
        getNotification: {
          ...state.getNotification,
          notifLoading: false,
          notifError: payload,
        },
      };

    default:
      return state;
  }
};

export default payment;
