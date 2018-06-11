import axios from 'axios';
import { ROOT_URL } from './api_config';

export const login = (params) => {
  // 54.84.232.25
  console.log(params)
  return axios.post(`${ROOT_URL}/login`, {
      email: params.username,
      password: params.password
    })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
}
