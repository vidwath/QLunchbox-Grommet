import { SHOW_ITEM, CREATE_ITEM, DELETE_ITEM } from "./type";
import { show } from "../api/item";
import history from '../history.js';
import { ROOT_URL } from '../api/api_config';



const headers = () => {
  return {
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    'Email': localStorage.getItem('email'),
    'Content-Type': 'application/json'
  };
}



export const getItems = () => {
    return (dispatch) => {
    const posts = 'posts';
      const show_item = 'show_item';
      var data = '';
      show()
      .then(res => {
        data = res.data.item;
        dispatch({type: SHOW_ITEM, payload: {show_item, data}})
      })
      .catch(e => console.log(e))
    }
  }

  export const createItem = (params) => {
  return(dispatch) => {
    const URL = `${ROOT_URL}/api/items/create`
    fetch(URL, {
      method: 'POST',
      headers: headers(), 
      body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(json => {
      console.log('response', json)
      // history.push('/');
      // dispatch({
      //   type: SIGNUP,
      //   payload: json
      // })
    })
    .catch(error => {
      console.log('error response', error)
    })
  }
}

export const deleteItem = (id) => {
  return(dispatch) => {
    
    const URL = `${ROOT_URL}/api/items/${id}`;
    fetch(URL, {
      method: 'DELETE',
      headers: headers()
    })
    .then(response => response.json())
    .then(json => {
      console.log('response', json)
      // dispatch({
      //   type: SIGNUP,
      //   payload: json
      // })
    })
    .catch(error => {
      console.log('error response', error)
    })
  }
}