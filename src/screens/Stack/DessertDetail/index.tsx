import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {EProductType, IDessert} from '../../../constants/types';
import styles from './style';
import {Icon} from 'custom-components/src';
import {cartStore} from '../../../store';
import {observer} from 'mobx-react-lite';

const DessertDetail = ({route}: any) => {
  const {item}: {item: IDessert} = route?.params ?? {};
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(item?.price ?? 0);

  const productType: EProductType = EProductType.DESSERT;

  useEffect(() => {
    if (count) setPrice(item?.price);
  }, [count]);

  const decreaseCount = () => setCount(count => --count);

  const increaseCount = () => setCount(count => ++count);

  const addToCart = () => {
    const existingCartItem = cartStore.cart.find(
      cartItem => cartItem.item.id === item.id,
    );

    if (existingCartItem) {
      // Update the quantity of the existing item
      existingCartItem.count += count;
      // cartStore.updateCart([...cartStore.cart]);
    } else {
      // If the item is not in the cart, add it as a new item
      const params = {
        item: {
          ...item,
          id: item?.id?.toString()?.includes(EProductType.DESSERT)
            ? item?.id
            : item?.id + productType,
        },
        price,
        count,
        productType,
      };
      cartStore.addToCart(params);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: item?.img}} style={styles.image} />
        <View style={styles.bottomContainer}>
          <Text style={styles.name}>{`${item?.name}`}</Text>
          <Text style={styles.description}>{item?.description}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.countContainer}>
          <Pressable
            disabled={count === 1}
            onPress={decreaseCount}
            style={[styles.iconContainer, count === 1 && styles.disabledIcon]}>
            <Icon name="minus : materialcomm" size={18} />
          </Pressable>
          <Text style={styles.countText}>{count}</Text>
          <Pressable onPress={increaseCount} style={styles.iconContainer}>
            <Icon name="plus : materialcomm" size={18} />
          </Pressable>
        </View>
        <View style={styles.subPriceContainer}>
          <Text style={styles.priceText}>€{price * count}</Text>
        </View>
        <Pressable onPress={addToCart} style={styles.addToCartContainer}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default observer(DessertDetail);
