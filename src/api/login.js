import axios from 'axios';
import { ROOT_URL } from './api_config';

export const login = (params) => {
  console.log("+++++++++",params)
  return axios.post(`${ROOT_URL}/api/users/login`, {
      email: params.username,
      password: params.password
    })
    .then(function (response) {
      console.log(response);
     return response;
    })
    .catch(function (error) {
      console.log(error);
     return error;
    });
}
