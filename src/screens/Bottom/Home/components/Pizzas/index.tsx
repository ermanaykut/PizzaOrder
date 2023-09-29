import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {pizzaService} from '../../../../../services';
import {IPizza} from '../../../../../constants/types';
import {PizzaItem} from './components';
import {DATA} from './data';

const Pizzas = () => {
  const [pizzaList, setPizzaList] = useState<IPizza[]>(DATA);

  useEffect(() => {
    // getPizzas();
  }, []);

  const getPizzas = () => {
    pizzaService
      .getPizzas()
      .then(res => {
        setPizzaList(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderPizza = ({item}: {item: IPizza}) => <PizzaItem {...{item}} />;

  return (
    <View>
      <FlatList data={pizzaList} renderItem={renderPizza} />
    </View>
  );
};

export default Pizzas;
