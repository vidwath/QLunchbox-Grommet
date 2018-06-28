import { LOGIN_MODAL, LOGIN_INVALID } from "./type";
import { login } from "../api/login";
import { ROOT_URL } from '../api/api_config';
import { browserHistory } from 'react-router';
import history from '../history.js';


export const loginModalOperation = (status) => {
  return (dispatch) => {
    var showLoginModal = 'showLoginModal';
    var loginModalStatus = true;
    dispatch({type: LOGIN_MODAL, payload: {showLoginModal, loginModalStatus}})
  }
}

export const loginToApp = (email, password) => {
  return (dispatch) => {
    login(email, password)
    .then(res => {
      if (res.data.status === 401) {
        var loginInvalid = 'loginInvalid';
        var data = res.data.message;
        dispatch({type: LOGIN_INVALID, payload: {loginInvalid, data}});
      } else {
        var data = res.data;
        var success = true
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('token', data.token)
        
        var showLoginModal = 'showLoginModal';
        var loginModalStatus = false;
        dispatch({type: LOGIN_MODAL, payload: {showLoginModal, loginModalStatus}})
        history.push('/home');
      }
    })
    .catch(e => {
      console.log('err',e)
    })
  }
}