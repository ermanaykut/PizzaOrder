import AxiosInstance from './axios';

class PizzaService {
  getPizzas = async () => {
    const response = await AxiosInstance.get('/pizzas');
    return response;
  };
}

export default new PizzaService();
