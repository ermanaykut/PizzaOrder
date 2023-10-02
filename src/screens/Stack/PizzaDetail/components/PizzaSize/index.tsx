import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './style';

const PizzaSize = ({
  item,
  onPress,
}: {
  item: {id: number; name: string; price: number};
  onPress: (item: {id: number; name: string; price: number}) => void;
}) => {
  const _onPress = () => onPress(item);
  return (
    <Pressable onPress={_onPress} style={styles.container}>
      <Text>{item.name}</Text>
      <Text style={styles.price}>
        <Text style={styles.plus}>+ </Text>€{item.price}
      </Text>
    </Pressable>
  );
};

export default PizzaSize;
