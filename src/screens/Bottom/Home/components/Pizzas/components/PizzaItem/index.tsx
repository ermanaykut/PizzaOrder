import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {IPizza} from '../../../../../../../constants/types';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {PAGES} from '../../../../../../pages';

const PizzaItem = ({item}: {item: IPizza}) => {
  const navigation = useNavigation<any>();

  const navigateToDetail = () =>
    navigation.navigate(PAGES.PIZZA_DETAIL.name, {item});

  return (
    <Pressable onPress={navigateToDetail} style={styles.container}>
      <Image source={{uri: item?.img}} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {item.description}
        </Text>
        <Text style={styles.price}>€{item.price}</Text>
      </View>
    </Pressable>
  );
};

export default PizzaItem;
