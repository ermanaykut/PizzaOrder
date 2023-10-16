export interface IPizza {
  description: string;
  id: string | number;
  img: string;
  name: string;
  price: number;
  quantity: number;
  sizeandcrust: any[];
  veg: boolean;
}

export interface IDessert {
  description: string;
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

export enum EProductType {
  PIZZA = 'pizza',
  DESSERT = 'dessert',
}
