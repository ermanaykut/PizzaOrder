import {FlatList, Image, Pressable, Text, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Icon} from 'custom-components/src';
import {observer} from 'mobx-react-lite';

import {DessertItem, ProductItem} from './components';
import globalStyle from '../../../constants/style';
import styles from './style';

import {colors} from '../../../constants/colors';
import {cartStore} from '../../../store';
import {PAGES} from '../../pages';
import {EProductType} from '../../../constants/types';

const Cart = () => {
  const clearAll = () => cartStore.clearAll();

  const navigation = useNavigation<any>();

  const pizzaToGo = () => navigation.navigate(PAGES.HOME.name, {type: true});

  const desertToGo = () => navigation.navigate(PAGES.HOME.name, {type: false});

  const renderItem = ({item}: any) => {
    switch (item?.productType) {
      case EProductType.DESSERT:
        return <DessertItem {...{item}} />;
      case EProductType.PIZZA:
        return <ProductItem {...{item}} />;
      default:
        return <></>;
    }
  };

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <View style={{height: '93%'}}>
        <FlatList data={cartStore.cart} renderItem={renderItem} />
        {cartStore.cart.length == 0 && (
          <View style={styles.emptyCartContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.guiderText}>Your Cart is empty!</Text>
              <Text style={styles.guiderText}>
                Please click the pizza or dessert buttons to add products.
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Pressable onPress={pizzaToGo}>
                <Image
                  source={require('../../../constants/pizzaSlice.png')}
                  style={styles.pizzaImage}
                />
              </Pressable>
              <Pressable onPress={desertToGo}>
                <Image
                  source={require('../../../constants/cakeSlice.png')}
                  style={styles.cakeImage}
                />
              </Pressable>
            </View>
          </View>
        )}
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
    </View>
  );
};

export default observer(Cart);
