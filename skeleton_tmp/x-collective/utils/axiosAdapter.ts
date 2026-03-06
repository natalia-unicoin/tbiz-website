import axios from 'axios';

const AXIOS_TIMEOUT = 2e4; // wait 20 sec

const axiosAdapter = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: AXIOS_TIMEOUT,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

export default axiosAdapter;
