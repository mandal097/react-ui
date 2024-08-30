import axios from "axios";
// const apiHost = 'http://localhost:5000/api/v1/';
const apiHost = 'https://react-ui-api.onrender.com/api/v1/';

const ax = axios.create({
  baseURL: apiHost,
});

export { ax, apiHost };
