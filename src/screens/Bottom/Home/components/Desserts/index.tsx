import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import {IDessert} from '../../../../../constants/types';
import {DessertItem} from './components';

import {dessertService} from '../../../../../services';

import {DATA} from './data';

import styles from './style';

const Desserts = () => {
  const [dessertList, setDessertList] = useState<IDessert[]>(DATA);

  useEffect(() => {
    // getDesserts();
  }, []);

  const getDesserts = () => {
    dessertService
      .getDesserts()
      .then(res => {
        setDessertList(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderDessert = ({item}: {item: IDessert}) => (
    <DessertItem {...{item}} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={dessertList} renderItem={renderDessert} />
    </View>
  );
};

export default Desserts;
