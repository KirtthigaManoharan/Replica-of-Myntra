import axios from 'axios';

export const loginform = user => {
  const api = axios.create({
    baseURL: 'http://localhost:5000/'
  });
  return api
    .post('users/login', {
      email: user.email,
      pass: user.pass
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}