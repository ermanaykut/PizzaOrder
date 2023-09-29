import {View} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../../constants/style';
import styles from './style';
import {Desserts, Pizzas, Tab} from './components';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState<boolean>(true);

  const changeActiveIndex = () => {
    setActiveIndex(!activeIndex);
  };

  return (
    <View style={globalStyle.globalContainer}>
      <Tab {...{activeIndex, changeActiveIndex}} />
      {activeIndex ? <Pizzas /> : <Desserts />}
    </View>
  );
};

export default Home;
