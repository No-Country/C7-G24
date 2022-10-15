import axios from 'axios';

export default axios.create({
  baseURL: 'https://bda-back-prueba.herokuapp.com/users',
  headers: {
    Accept: 'application/json,x-www-form-urlencoded',
    'Content-Type': 'application/json,x-www-form-urlencoded',
  },
  method: 'POST',
});
