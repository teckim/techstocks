import axios from 'axios';
import { API_ENDPOINT, FMP_API_KEY } from '../data/constants';

const http = axios.create({
  baseURL: API_ENDPOINT,
  params: {
    apikey: FMP_API_KEY,
  },
});

export default http;
