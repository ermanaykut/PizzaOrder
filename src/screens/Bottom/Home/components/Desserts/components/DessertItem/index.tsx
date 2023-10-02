import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {PAGES} from '../../../../../../pages';
import {IDessert} from '../../../../../../../constants/types';

import styles from './style';

const DessertItem = ({item}: {item: IDessert}) => {
  const navigation = useNavigation<any>();

  const navigateToDetail = () =>
    navigation.navigate(PAGES.DESSERT_DETAIL.name, {item});

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

export default DessertItem;
