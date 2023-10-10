import {FlatList, Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {cartStore} from '../../../store';

import {observer} from 'mobx-react-lite';
import {ProductItem} from './components';
import globalStyle from '../../../constants/style';
import styles from './style';

import {colors} from '../../../constants/colors';
import {Icon} from 'custom-components/src';
import { useNavigation } from '@react-navigation/native';
import { PAGES } from '../../pages';


const Cart = () => {
  const clearAll = () => cartStore.clearAll();

  const navigation = useNavigation<any>()

  const pizzaToGo=()=> navigation.navigate(PAGES.CART.name)

  const renderItem = ({item}: any) => <ProductItem {...{item}} />;

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <View>
        <FlatList data={cartStore.cart} renderItem={renderItem} />
      </View>
      {cartStore.cart.length !== 0 && (
        <View style={styles.bottomContainer}>
          <Pressable onPress={clearAll} style={styles.clearAllButton}>
            <Icon name="trash : feather" size={18} color={colors.white} />
            <Text style={styles.clearAllText}>Clear All</Text>
          </Pressable>
          <View style={styles.bottomRightContainer}>
            <Text style={styles.totalText}>Total: €{cartStore.total}</Text>
          </View>
        </View>
      )}
      {cartStore.cart.length == 0 && (
        <View style={styles.emptyCartContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.guiderText}>Your Cart is empty!</Text>
            <Text style={styles.guiderText}>
              Please click the pizza or dessert buttons to add products.
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={pizzaToGo}>
              <Image
                source={require('../../../constants/pizzaSlice.png')}
                style={styles.pizzaImage}
              />
            </TouchableOpacity>
            <Pressable>
              <Image
                source={require('../../../constants/cakeSlice.png')}
                style={styles.cakeImage}
              />
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default observer(Cart);
