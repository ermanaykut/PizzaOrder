import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './style';

const Tab = ({
  activeIndex,
  changeActiveIndex,
}: {
  activeIndex: boolean;
  changeActiveIndex: () => void;
}) => {
  return (
    <View style={styles.tabContainer}>
      <Pressable
        onPress={changeActiveIndex}
        style={[
          styles.subTabContainer,
          activeIndex && styles.activeSubTabContainer,
        ]}>
        <Text
          style={[styles.subTabText, activeIndex && styles.activeSubTabText]}>
          Pizzas
        </Text>
      </Pressable>
      <Pressable
        onPress={changeActiveIndex}
        style={[
          styles.subTabContainer,
          !activeIndex && styles.activeSubTabContainer,
        ]}>
        <Text
          style={[styles.subTabText, !activeIndex && styles.activeSubTabText]}>
          Desserts
        </Text>
      </Pressable>
    </View>
  );
};

export default Tab;
