import { SIGNUP_MODAL } from '../actions/type'

const INITIAL_STATE = {
  showSignUpModal: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SIGNUP_MODAL: 
    return {...state, [action.payload.showSignUpModal]:action.payload.status};
      // return state[action.payload.showLoginModal] = action.payload.status;
    default :
      return state;
  }
}
