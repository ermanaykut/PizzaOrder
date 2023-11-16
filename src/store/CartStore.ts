import {action, makeObservable, observable} from 'mobx';
import {EProductType} from '../constants/types';

class CartStore {
  constructor() {
    makeObservable(this);
  }

  @observable cart: any[] = [];
  @observable total: number = 0;

  /*  @action addToCart = (params: any) => {
    // pizza ve tatlı
    this.total += params?.price * params?.count;

    let product = this.cart.find(
      x => x?.item?.id === params?.item?.id && x?.size?.id === params?.size?.id,
    );

    if (product) {
      //ürün ve boyut aynı ise
      if (params?.extra?.length === product?.extra?.length) {
        let control = false;

        for (let i = 0; i < params?.extra?.length; i++) {
          if (
            product?.extra?.find((x: any) => x?.id === params?.extra?.[i]?.id)
          ) {
            control = true;
          } else {
            control = false;
            break;
          }
        }

        if (!control) {
          let arr: any[] = this.cart;

          arr.push(params);
          this.cart = arr ?? [];
        } else {
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
              if (x?.size?.id === product?.size?.id) {
              }
            } else {
              arr.push(x);
            }
          });
          arr?.push(product);
          this.cart = arr ?? [];
        }
      } else {
        //ürün varsa ve boyut aynıysa ve ekstraların sayısı farklıysa
        let arr: any[] = this.cart;

        arr.push(params);
        this.cart = arr ?? [];
      }
    } else {
      //ürün yoksa veya boyut farklıysa
      let arr: any[] = this.cart;

      arr.push(params);
      this.cart = arr ?? [];
    }
  }; */

  @action addToCart = (params: any) => {
    if (
      params?.productType === EProductType.PIZZA ||
      params?.productType === EProductType.DESSERT
    ) {
      if (params?.price && params?.count)
        this.total += params?.price * params?.count;
    }

    let existingProduct = this.cart.find(x => x?.item?.id === params?.item?.id);

    if (existingProduct) {
      if (
        existingProduct.productType === EProductType.DESSERT &&
        params.productType === EProductType.DESSERT
      ) {
        existingProduct.count += params?.count;
      } else {
        if (existingProduct?.item?.size === params?.item?.size) {
          const existingExtrasSorted = existingProduct.extra
            .slice()
            .sort((a: {id: number}, b: {id: number}) => a.id - b.id);

          const newExtrasSorted = params.extra
            .slice()
            .sort((a: {id: number}, b: {id: number}) => a.id - b.id);

          // Check if the sorted extras are the same
          const extrasMatch =
            JSON.stringify(existingExtrasSorted) ===
            JSON.stringify(newExtrasSorted);

          if (extrasMatch) {
            existingProduct.count += params?.count;
          } else {
            this.cart.push(params);
          }
        } else {
          this.cart.push(params);
        }
      }
    } else {
      this.cart.push(params);
    }
  };

  /*   @action changeCount = (params: any, type: string) => {
    let index = this.cart.findIndex(x => x?.item?.id === params?.item?.id);
    let arr = this.cart;
    arr[index] = {
      ...arr[index],
      count: type === 'plus' ? arr[index]?.count + 1 : arr[index]?.count - 1,
    };
    this.cart = arr;
    if (type === 'plus') this.total += params?.price;
    else this.total -= params?.price; //deleteProduct'ta total azaltılmadığı için total ürün silinmesinde azalmıyor
  }; */

  @action changeCount = (params: any, type: string) => {
    let arr = [...this.cart];
    let index = arr.findIndex(
      x =>
        x?.item?.id === params?.item?.id &&
        x?.item?.size === params?.item?.size &&
        JSON.stringify(
          x?.extra
            ?.slice()
            .sort((a: {id: number}, b: {id: number}) => a.id - b.id),
        ) ===
          JSON.stringify(
            params?.extra
              ?.slice()
              .sort((a: {id: number}, b: {id: number}) => a.id - b.id),
          ),
    );

    if (index !== -1) {
      if (params?.productType === EProductType.DESSERT) {
        // Update the count for desserts
        arr[index] = {
          ...arr[index],
          count:
            type === 'plus'
              ? arr[index]?.count + 1
              : Math.max(0, arr[index]?.count - 1),
        };
      } else if (params?.productType === EProductType.PIZZA) {
        // If there's an item with the same ID and matching extras, update the count
        arr[index] = {
          ...arr[index],
          count:
            type === 'plus'
              ? arr[index]?.count + 1
              : Math.max(0, arr[index]?.count - 1),
        };
      }
      this.cart = arr;

      if (type === 'plus') this.total += params?.price;
      else this.total -= params?.price;
    }
  };

  @action clearAll = () => {
    this.cart = [];
    this.total = 0;
  }; //total sıfırlanmıyor

  /*  @action deleteProduct = (params: any) => {
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
  }; */
  @action deleteProduct = (params: any) => {
    let arr: any[] = [];

    this.cart?.forEach(x => {
      if (x?.item?.id === params?.item?.id) {
        if (params?.productType === EProductType.DESSERT) {
          this.total -= x?.price;
        } else {
          let existingProduct = this.cart.find(
            x => x?.item?.id === params?.item?.id,
          );

          if (existingProduct?.item?.size === params?.item?.size) {
            const existingExtrasSorted = x.extra
              .slice()
              .sort((a: {id: number}, b: {id: number}) => a.id - b.id);
            const newExtrasSorted = params.extra
              .slice()
              .sort((a: {id: number}, b: {id: number}) => a.id - b.id);
            const extrasMatch =
              JSON.stringify(existingExtrasSorted) ===
              JSON.stringify(newExtrasSorted);

            // Check if the sorted extras are the same

            if (extrasMatch) {
              this.total -= x?.price;
            } else {
              arr.push(x);
            }
          } else {
            arr.push(x);
          }
        }
      } else {
        arr.push(x);
      }
    });

    this.cart = arr;
  };
}

export default new CartStore();
