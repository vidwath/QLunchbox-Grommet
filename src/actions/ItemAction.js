import { SHOW_ITEM } from "./type";
import { show } from "../api/item";
import history from '../history.js';

export const getItems = () => {
    return (dispatch) => {
    const posts = 'posts';
      const show_item = 'show_item';
      var data = '';
      show()
      .then(res => {
        data = res.data.user;
        dispatch({type: SHOW_ITEM, payload: {show_item, data}})
      })
      .catch(e => console.log(e))
    }
  }