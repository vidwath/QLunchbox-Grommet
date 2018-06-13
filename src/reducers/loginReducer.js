import { LOGIN_MODAL } from '../actions/type'

const INITIAL_STATE = {
  showLoginModal: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LOGIN_MODAL: 
    return {...state, [action.payload.showLoginModal]:action.payload.loginModalStatus};
      // return state[action.payload.showLoginModal] = action.payload.status;
    default :
      return state;
  }
}
