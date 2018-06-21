import { SIGNUP_MODAL } from "./type";
import { signup } from "../api/signup";
import { browserHistory } from 'react-router';
import { ROOT_URL } from '../api/api_config';
import history from '../history.js';


export const signUpModalOperation = (status) => {
	console.log('signUpModalOperation')
  return (dispatch) => {
    var showSignUpModal = 'showSignUpModal';
    dispatch({type: SIGNUP_MODAL, payload: {showSignUpModal, status}})
  }
}

export const signupToApp = (params) => {
  return(dispatch) => {
    const URL = `${ROOT_URL}/api/users/create`
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(json => {
      console.log('response', json)
      // dispatch({
      //   type: SIGNUP,
      //   payload: json
      // })
      history.push('/home');
    })
    .catch(error => {
      console.log('error response', error)
    })
  }
}



