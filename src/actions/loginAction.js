import { LOGIN_MODAL } from "./type";

export const loginModalOperation = (status) => {
	console.log("calling action")
  return (dispatch) => {
    var showLoginModal = 'showLoginModal';
    dispatch({type: LOGIN_MODAL, payload: {showLoginModal, status}})
  }
}
