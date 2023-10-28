import AxiosInstance from './BurgerAxios';

class BurgerService {
  getBurgers = async () => {
    const response = await AxiosInstance.get('/burgers');
    return response;
  };
}

export default new BurgerService();
