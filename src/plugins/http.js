import axios from 'axios';
import { API_ENDPOINT } from '../data/constants';

const http = axios.create({ baseURL: API_ENDPOINT });

export default http;
