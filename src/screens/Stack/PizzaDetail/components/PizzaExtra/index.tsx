import {View, Pressable, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {Icon} from 'custom-components/src';
import {colors} from '../../../../../constants/colors';

const PizzaExtra = ({
  item,
  size,
  onPress,
  isChecked,
}: {
  item: {id: number; name: string; price: number[]};
  size: {id: number; name: string; price: number};
  onPress: (item: {id: number; name: string; price: number[]}) => void;
  isChecked: boolean;
}) => {
  return (
    <Pressable onPress={() => onPress(item)} style={styles.container}>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          {isChecked && (
            <View style={styles.iconContainer}>
              <Icon
                name="check : materialcomm"
                size={30}
                color={colors.green}
              />
            </View>
          )}
        </View>
        <Text style={styles.title}>{item?.name}</Text>
      </View>
      <Text style={styles.price}>
        <Text style={styles.plus}>+ </Text>€{item?.price?.[size?.id]}
      </Text>
    </Pressable>
  );
};

export default PizzaExtra;
