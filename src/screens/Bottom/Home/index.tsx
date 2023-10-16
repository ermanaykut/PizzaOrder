import {View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Desserts, Pizzas, Tab} from './components';
import globalStyle from '../../../constants/style';

const Home = ({route}: any) => {
  const {type = true} = route?.params ?? {};

  const [activeIndex, setActiveIndex] = useState<boolean>(true);

  useEffect(() => {
    setActiveIndex(type);
  }, [type]);

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
