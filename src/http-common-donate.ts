import axios from 'axios';

export default axios.create({
  baseURL: 'https://bda-back-prueba.herokuapp.com/donate',
  headers: {
    Accept: 'aplication/json',
    'Content-Type': 'aplication/json',
  },
  method: 'POST',
});
