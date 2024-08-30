import axios from "axios";
// const apiHost = 'http://localhost:5000/api/v1/';
const apiHost = 'http://192.168.1.3:5000/api/v1/';

const ax = axios.create({
  baseURL: apiHost,
});

export { ax, apiHost };
