import axios from 'axios';
const BASE_URL = 'https://family-spend-2e147db72cad.herokuapp.com/api';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials: false
});