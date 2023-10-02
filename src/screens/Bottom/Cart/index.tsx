import {FlatList, Pressable, Text, View} from 'react-native';
import React from 'react';
import {cartStore} from '../../../store';

import {observer} from 'mobx-react-lite';
import {ProductItem} from './components';
import globalStyle from '../../../constants/style';
import styles from './style';

import {colors} from '../../../constants/colors';
import { Icon } from 'custom-components/src';

const Cart = () => {
  const clearAll = () => cartStore.clearAll();

  const renderItem = ({item}: any) => <ProductItem {...{item}} />;

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <FlatList data={cartStore.cart} renderItem={renderItem} />
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
