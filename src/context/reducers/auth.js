import {
  CLEAR_AUTH_STATE,
  LOGIN_CHECK,
  LOGIN_FAIL,
  LOGIN_FALSE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_TRUE,
  LOGOUT_USER,
} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    case LOGIN_TRUE:
      return {
        ...state,
        isLoggedIn: true,
      };

    case LOGIN_FALSE:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default auth;
