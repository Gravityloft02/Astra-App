import {LOGIN_TRUE} from '../../constants/actionTypes';

export default () => dispatch => {
  dispatch({
    type: LOGIN_TRUE,
  });
};
