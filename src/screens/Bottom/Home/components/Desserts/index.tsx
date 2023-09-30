import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

import {dessertService} from '../../../../../services';


import {DATA} from './data';
import { DessertItem } from './components';
import { IDessert } from '../../../../../constants/types';

const Desserts = () => {
  const [dessertList, setDessertList] = useState<IDessert[]>(DATA);

  useEffect(() => {
    //getDesserts();

  }, []);

  const getDesserts = () => {
      dessertService
      .getDesserts()
      .then(res => {
        setDessertList(res?.data);;
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderDessert = ({item}: {item: IDessert}) => <DessertItem{...{item}} />;

  return (
    <View>
      <FlatList data={dessertList} renderItem={renderDessert}/>
    </View>
  );
};

export default Desserts;
