import axios from 'axios';
const BASE_URL = 'https://family-spend-2e147db72cad.herokuapp.com/api/gasto';

export default axios.create({
    baseURL: BASE_URL,
    headers:{
        'Content-Type': 'application/json',
        //'Accept': 'application/json'
    }
});