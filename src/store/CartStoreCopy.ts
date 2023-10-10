import {action, makeObservable, observable} from 'mobx';

class CartStoreCopy {
  constructor() {
    makeObservable(this);
  }

  @observable cart: any[] = [];
  @observable total: number = 0;

  @action addToCart = (params: any, productType: string) => {
    this.total += params?.count * params?.price;
    console.log(this.total);
    let product = this.cart.find(x => x?.item?.id === params?.item?.id);
    if (product) {
      if (productType === 'pizza')
        if (product?.size?.id == params?.size?.id) {
          product = {
            ...product,
            count: product?.count + params?.count,
          };
          let arr = this.cart.filter(x => x?.item?.id != product?.item?.id);
          this.cart = arr;
          this.cart.push(product);
        } else {
          this.cart.push(params);
        }
      else {
        product = {
          ...product,
          count: product?.count + params?.count,
        };
        let arr = this.cart.filter(x => x?.item?.id != product?.item?.id);
        this.cart = arr;
        this.cart.push(product);
      }
    } else {
      this.cart.push(params);
    }
  };

  @action changeCount = (params: any, type: string) => {
    let index = this.cart.findIndex(x => x?.item?.id === params?.item?.id);
    let arr = this.cart;
    arr[index] = {
      ...arr[index],
      count: type === 'plus' ? arr[index]?.count + 1 : arr[index]?.count - 1,
    };
    this.cart = arr;
    if (type === 'plus') this.total += params?.price;
    else this.total -= params?.price;
  };

  @action clearAll = () => (this.cart = []); 

  @action deleteProduct = (params: any, productType:string) => {
    let arr = this.cart.filter(x => x?.item?.id !== params?.item?.id);
    this.cart = arr;
  };
}

export default new CartStoreCopy();
