import axios from 'axios';

import credentials from '../credentials/baseUrl.json';

const api = axios.create({
  baseURL: credentials.ip
});

export default api;