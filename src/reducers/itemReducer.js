import { SHOW_ITEM } from '../actions/type'

const INITIAL_STATE = {
    show_item: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SHOW_ITEM: 
    return {...state, [action.payload.show_item]:action.payload.data};
      // return state[action.payload.showLoginModal] = action.payload.status;
    default :
      return state;
  }
}
