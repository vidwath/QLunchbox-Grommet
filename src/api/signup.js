import axios from 'axios';
import { ROOT_URL } from './api_config';

export const signup = (params) => {
  // 54.84.232.25
  params = {
    "email":"ujwala1@yopmail.com",
    "password": "password",
    "first_name": "shashi",
    "last_name": "kiran"
  }
  console.log('api', params)
  return axios.post(`${ROOT_URL}/api/users/create`)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
}
