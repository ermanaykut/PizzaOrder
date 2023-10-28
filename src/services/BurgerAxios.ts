import axios from 'axios';
import {BASE_URL} from '../Config';

const AxiosInstance = axios.create();

AxiosInstance.defaults.baseURL = BASE_URL;

AxiosInstance.interceptors.request.use(
  async (config: any) => {
    return {
      ...config,
      headers: {
        'X-RapidAPI-Key': '66f69b08d8msh11486206cd8cdb0p19ff70jsn13dba3eca6e0',
        'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
        ...config.headers,
      },
    };
  },
  error => {
    return Promise.reject(error);
  },
);
AxiosInstance.interceptors.response.use(response => {
  return response;
});
export default AxiosInstance;
