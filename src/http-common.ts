import axios from 'axios';

export default axios.create({
  baseURL: 'https://bda-back-prueba.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
