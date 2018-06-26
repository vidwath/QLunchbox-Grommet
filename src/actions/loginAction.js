import { LOGIN_MODAL, LOGIN_INVALID, LOGIN_ERROR_MSG } from "./type";
import { login } from "../api/login";
import { ROOT_URL } from '../api/api_config';
import { browserHistory } from 'react-router';
import history from '../history.js';


export const loginModalOperation = (loginModalStatus) => {
  return (dispatch) => {
    var showLoginModal = 'showLoginModal';
    // var loginModalStatus = true;
    dispatch({type: LOGIN_MODAL, payload: {showLoginModal, loginModalStatus}})
  }
}

export const loginToApp = (email, password) => {
  return (dispatch) => {
    login(email, password)
    .then(res => {
      if (res.data.status === 422) {
        var loginInvalid = 'loginInvalid';
        var data = res.data.message;
        dispatch({type: LOGIN_INVALID, payload: {loginInvalid, data}});
      } else {
        var data = res.data;
        var success = true
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('access_token', data.token)
        var showLoginModal = 'showLoginModal';
        var loginModalStatus = false;
        dispatch({type: LOGIN_MODAL, payload: {showLoginModal, loginModalStatus}})
        dispatch({type: LOGIN_SUCCESS_MSG, payload: res.data.message})
        history.push('/home');
      }
    })
    .catch(e => {
      console.log('err',e)
      dispatch({type: LOGIN_ERROR_MSG, payload: e})
    })
  }
}