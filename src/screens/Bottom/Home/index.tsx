import {View} from 'react-native';
import React, {useState} from 'react';

import {Desserts, Pizzas, Tab} from './components';
import globalStyle from '../../../constants/style';

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
