import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {PAGES} from '../../../../pages';
import styles from './style';

import {colors} from '../../../../../constants/colors';
import {cartStore} from '../../../../../store';
import {Icon} from 'custom-components/src';

const ProductItem = ({item}: {item: any}) => {
  const navigation = useNavigation<any>();

  const [count, setCount] = useState<number>(item?.count);

  useEffect(() => {
    if (item?.count !== count) setCount(item?.count);
  }, [item?.count, count]);

  const navigateToDetail = () => {
    navigation.navigate(PAGES.PIZZA_DETAIL.name, {
      item: item?.item,
    });
  };

  const decreaseCount = () => {
    if (count === 1) {
      cartStore.deleteProduct(item);
    } else {
      setCount(count => --count);
      cartStore.changeCount(item, 'minus');
    }
  };

  const increaseCount = () => {
    setCount(count => ++count);
    cartStore.changeCount(item, 'plus');
  };

  return (
    <Pressable onPress={navigateToDetail} style={styles.container}>
      <Image source={{uri: item?.item?.img}} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.rightLeftContainer}>
          <Text style={styles.name}>{item?.item?.name}</Text>
          <Text style={styles.description} numberOfLines={1}>
            {item?.extra?.map((x: any) => x?.name)?.join(', ')}
          </Text>
          <Text style={styles.size}>{item?.size?.name}</Text>
        </View>
        <View style={styles.countAndPriceContainer}>
          <Text style={styles.price}>€{item?.price * count}</Text>
          <View style={styles.countContainer}>
            <Pressable
              onPress={decreaseCount}
              style={[
                styles.iconContainer,
                count === 1 && styles.disabledIcon,
              ]}>
              <Icon
                name={count === 1 ? 'trash : feather' : 'minus : materialcomm'}
                size={14}
                color={colors.white}
              />
            </Pressable>
            <Text style={styles.countText}>{count}</Text>
            <Pressable onPress={increaseCount} style={styles.iconContainer}>
              <Icon name="plus : materialcomm" size={14} color={colors.white} />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;
