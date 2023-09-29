import {View, Text, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {IDessert} from '../../../constants/types';
import styles from './style';
import { Icon } from 'custom-components/src';


const DessertDetail = ({route}: any) => {
  const {item}: {item: IDessert} = route?.params ?? {};
  const [count, setCount] = useState<number>(1);

  const decreaseCount = () => setCount(count => --count);

  const increaseCount = () => setCount(count => ++count);

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: item?.img}} style={styles.image} />
        <View style={styles.bottomContainer}>
          <Text style={styles.name}>{`${item.name}`}</Text>
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
          <Text style={styles.priceText}>€{item?.price * count}</Text>
        </View>
      </View>
    </View>
  );
};

export default DessertDetail;
