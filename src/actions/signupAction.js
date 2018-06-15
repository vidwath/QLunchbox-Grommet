import { SIGNUP_MODAL } from "./type";

export const signUpModalOperation = (status) => {
	console.log('signUpModalOperation')
  return (dispatch) => {
    var showSignUpModal = 'showSignUpModal';
    dispatch({type: SIGNUP_MODAL, payload: {showSignUpModal, status}})
  }
}


