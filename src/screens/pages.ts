import DeliveryNavigator from '../router/delivery-navigator';
import {PizzaDetail, DessertDetail, Addresses} from './Stack';
import {Home} from './Bottom';

enum NAMES {
  // LOGIN = 'LOGIN',
  // REGISTER = 'REGISTER',
  BOTTOM = 'BOTTOM',
  PIZZA_DETAIL = 'PIZZA_DETAIL',
  DESSERT_DETAIL = 'DESSERT_DETAIL',
  HOME = 'HOME',
  ADDRESSES = 'ADDRESSES',
}

export const PAGES: {
  [name in NAMES]: {
    name: string;
    component: any;
    options?: any;
  };
} = {
  // [NAMES.LOGIN]: {
  //   name: 'Login',
  //   component: Login,
  // },
  // [NAMES.REGISTER]: {
  //   name: 'Register',
  //   component: Register,
  // },
  [NAMES.BOTTOM]: {
    name: 'DeliveryNavigator',
    component: DeliveryNavigator,
  },
  [NAMES.PIZZA_DETAIL]: {
    name: 'PizzaDetail',
    component: PizzaDetail,
  },
  [NAMES.DESSERT_DETAIL]: {
    name: 'DessertDetail',
    component: DessertDetail,
  },
  [NAMES.HOME]: {
    name: 'Home',
    component: Home,
  },
  [NAMES.ADDRESSES]: {
    name: 'Addresses',
    component: Addresses,
  },
};
