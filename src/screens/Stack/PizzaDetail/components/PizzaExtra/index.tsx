import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './style';

const PizzaExtra = ({
  item,
  size,
  onPress,
}: {
  item: {id: number; name: string; price: number[]};
  size: {id: number; name: string; price: number};
  onPress: (item: {id: number; name: string; price: number[]}) => void;
}) => {
  return (
    <Pressable onPress={() => onPress(item)} style={styles.container}>
      <Text style={styles.title}>{item?.name}</Text>
      <Text style={styles.price}>
        <Text style={styles.plus}>+ </Text>€{item?.price?.[size?.id]}
      </Text>
    </Pressable>
  );
};

export default PizzaExtra;
