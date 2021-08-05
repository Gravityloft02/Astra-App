import {LOGIN_FALSE} from '../../constants/actionTypes';

export default () => dispatch => {
  dispatch({
    type: LOGIN_FALSE,
  });
};
