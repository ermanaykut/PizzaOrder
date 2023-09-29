import AxiosInstance from './axios';

class DessertService {
  getDesserts = async () => {
    const response = await AxiosInstance.get('/desserts');
    return response;
  };
}

export default new DessertService();
