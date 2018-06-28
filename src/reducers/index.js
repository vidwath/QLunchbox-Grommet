import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signupReducer';
import itemReducer from './itemReducer';

export default combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  item: itemReducer
})
