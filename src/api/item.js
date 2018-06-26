import axios from 'axios';
import { ROOT_URL } from './api_config';

const headers = () => {
    return {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Email': localStorage.getItem('email'),
      'Content-Type': 'application/json'
    };
  }

export const show = () => {
    return axios({method: 'get', url: `${ROOT_URL}/api/items`, headers: headers()});
}
