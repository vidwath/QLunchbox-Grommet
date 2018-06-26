import { LOGIN_MODAL, LOGIN_SUCCESS_MSG, LOGIN_ERROR_MSG, LOGIN_INVALID} from '../actions/type'

const INITIAL_STATE = {
  showLoginModal: false,
  loginSuccessMsg: '',
  loginErrMsg: '',
  loginInvalid: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LOGIN_MODAL: 
    return {...state, [action.payload.showLoginModal]:action.payload.loginModalStatus};
      // return state[action.payload.showLoginModal] = action.payload.status;
      case LOGIN_SUCCESS_MSG: 
    return {...state, loginSuccessMsg:action.payload};
   	case LOGIN_ERROR_MSG: 
     return {...state, loginErrMsg:action.payload};
    case LOGIN_INVALID: 
     return {...state, loginInvalid:action.payload};
    default :
      return state;
  }
}
