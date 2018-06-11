import { LOGIN_MODAL } from "./type";
import { login } from "../api/login";

export const loginModalOperation = (status) => {
	console.log("calling action")
  return (dispatch) => {
    var showLoginModal = 'showLoginModal';
    dispatch({type: LOGIN_MODAL, payload: {showLoginModal, status}})
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
        var loginSuccess = 'loginSuccess';
        var data = res.data;
        var success = true
        localStorage.setItem('email', data.email)
        localStorage.setItem('token', data.id_token)
        dispatch({type: LOGIN_SUCCESS, payload: {loginSuccess, success}})
      }
    })
    .catch(e => {
      console.log('err',e)
    })
  }
}