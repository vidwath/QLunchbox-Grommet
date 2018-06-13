import { LOGIN_MODAL, LOGIN_INVALID } from "./type";
import { login } from "../api/login";
import { browserHistory } from 'react-router';

export const loginModalOperation = (status) => {
	console.log("calling action")
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
        console.log(browserHistory)
        localStorage.setItem('email', data.email)
        localStorage.setItem('token', data.id_token)
        var showLoginModal = 'showLoginModal';
        var loginModalStatus = false;
        dispatch({type: LOGIN_MODAL, payload: {showLoginModal, loginModalStatus}})
      }
    })
    .catch(e => {
      console.log('err',e)
    })
  }
}