import {View, Text, Image, Pressable, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import styles from './style';
import {Icon} from 'custom-components/src';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {PizzaExtra, PizzaSize} from './components';
import {cartStore} from '../../../store';
import {observer} from 'mobx-react-lite';
import {EProductType, IPizza} from '../../../constants/types';

const PizzaDetail = ({route}: any) => {
  const {item}: {item: IPizza} = route?.params ?? {};
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const extraActionRef = useRef<ActionSheetRef>(null);

  const [size, setSize] = useState<{id: number; name: string; price: number}>({
    id: 0,
    name: 'Small',
    price: 0,
  });
  const [extra, setExtra] = useState<{
    id: number;
    name: string;
    price: number[];
  } | null>();

  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(item?.price ?? 0);

  const productType: EProductType = EProductType.PIZZA;

  useEffect(() => {
    if (size) {
      setPrice(item?.price + size?.price + (extra?.price?.[size?.id] ?? 0));
    }
  }, [extra, size]);

  useEffect(() => {
    setExtra(null);
  }, [size]);

  const decreaseCount = () => setCount(count => --count);

  const increaseCount = () => setCount(count => ++count);

  const openSizeAction = () => actionSheetRef.current?.show();

  const openExtraAction = () => extraActionRef?.current?.show();

  const addToCart = () => {
    // console.log([4, 6, 8][size?.id])
    const params = {
      item: {
        ...item,
        id: item?.id?.toString()?.includes(EProductType.PIZZA)
          ? item?.id
          : item?.id + productType,
      },
      price,
      size,
      count,
      productType,
    };

    cartStore.addToCart(params);
  };

  const SIZES = [
    {
      id: 0,
      name: 'Small',
      price: 0,
    },
    {
      id: 1,
      name: 'Medium',
      price: 3,
    },
    {
      id: 2,
      name: 'Large',
      price: 6,
    },
  ];

  const EXTRAS: {id: number; name: string; price: number[]}[] = [
    {
      id: 1,
      name: 'Onion',
      price: [3, 6, 9],
    },
    {
      id: 2,
      name: 'Cheese',
      price: [4, 8, 10],
    },
    {
      id: 3,
      name: 'Olive',
      price: [1, 2, 3],
    },
  ];

  // const EXTRAS = [
  //   {
  //     id: 1,
  //     name: 'Cheese',
  //     price: [4, 6, 8],
  //   },
  // ];

  const onPress = (item: {id: number; name: string; price: number}) => {
    actionSheetRef.current?.hide();
    setSize(item);
  };

  const onPressExtra = (item: {id: number; name: string; price: number[]}) => {
    extraActionRef.current?.hide();
    setExtra(item);
  };

  const renderSize = ({
    item,
  }: {
    item: {id: number; name: string; price: number};
  }) => <PizzaSize {...{item, onPress}} />;

  const renderExtra = ({
    item,
  }: {
    item: {id: number; name: string; price: number[]};
  }) => <PizzaExtra {...{item, size, onPress: onPressExtra}} />;

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: item?.img}} style={styles.image} />
        <View style={styles.bottomContainer}>
          <Text style={styles.name}>{`${item.name} ${
            item?.veg && '(Vegan)'
          }`}</Text>
          <Text style={styles.description}>{item?.description}</Text>
          <Pressable onPress={openSizeAction} style={styles.sizeContainer}>
            <Text>Pizza Size: {size?.name}</Text>
          </Pressable>

          <Pressable onPress={openExtraAction} style={styles.sizeContainer}>
            <Text>Extra: {extra?.name}</Text>
          </Pressable>
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
      <ActionSheet ref={actionSheetRef} gestureEnabled>
        <View style={styles.actionSheetContainer}>
          <Text style={styles.title}>Choose Pizza Size</Text>
          <FlatList data={SIZES} renderItem={renderSize} />
        </View>
      </ActionSheet>

      <ActionSheet ref={extraActionRef} gestureEnabled>
        <View style={styles.actionSheetContainer}>
          <Text style={styles.title}>Choose Extras</Text>
          <FlatList data={EXTRAS} renderItem={renderExtra} />
        </View>
      </ActionSheet>
    </View>
  );
};

export default observer(PizzaDetail);
