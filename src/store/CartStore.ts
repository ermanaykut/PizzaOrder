import {action, makeObservable, observable} from 'mobx';
import {EProductType} from '../constants/types';

class CartStore {
  constructor() {
    makeObservable(this);
  }

  @observable cart: any[] = [];
  @observable total: number = 0;

  @action addToCart = (params: any) => {
    // pizza ve tatlı
    this.total += params?.price * params?.count;

    let product = this.cart.find(
      x => x?.item?.id === params?.item?.id && x?.size?.id === params?.size?.id,
    );

    if (product) {
      //ürün ve boyut aynı ise
      product = {
        ...product,
        count: product?.count + params?.count,
      };
      // 1 s 1
      // 1 m 1
      // 2 s 1
      let arr: any[] = [];

      this.cart.map(x => {
        if (x?.item?.id === product?.item?.id) {
          if (x?.size?.id !== product?.size?.id) {
            arr.push(x);
          }
        } else {
          arr.push(x);
        }
      });
      arr?.push(product);
      this.cart = arr ?? [];
    } else {
      //ürün yoksa veya boyut farklıysa
      let arr: any[] = this.cart;

      arr.push(params);
      this.cart = arr ?? [];
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
    else this.total -= params?.price; //deleteProduct'ta total azaltılmadığı için total ürün silinmesinde azalmıyor
  };

  @action clearAll = () => {
    this.cart = [];
    this.total = 0;
  }; //total sıfırlanmıyor

  @action deleteProduct = (params: any) => {
    let arr: any[] = [];
    this.cart?.map(x => {
      if (x?.item?.id === params?.item?.id) {
        console.log('in', x?.size);
        if (params?.productType === EProductType.PIZZA) {
          if (x?.size?.id !== params?.size?.id) {
            console.log('inin');
            arr.push(x);
          }
        }
      } else arr.push(x);
    });
    this.cart = arr;
  };
}

export default new CartStore();
