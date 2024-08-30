import axios from "axios";
// const apiHost = import.meta.env.VITE_API_URL;
const apiHost = 'http://localhost:3000';

const ax = axios.create({
  baseURL: apiHost,
});

export { ax, apiHost };
