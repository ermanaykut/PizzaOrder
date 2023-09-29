import React from 'react';
import {View, LogBox, Pressable} from 'react-native';

import globalStyle from '../../constants/style';
import {midRouteName} from '../../constants/variables';
import {Icon} from 'custom-components/src';

import {colors} from '../../constants/colors';
import styles from './style';

LogBox.ignoreAllLogs();

export default function CustomTabBar({state, navigation}: any) {
  return (
    <View style={[globalStyle.midShadow, styles.container]} key={state.index}>
      {state?.routes?.map((route: any, index: number) => {
        const isFocused = state.index == index;
        const {iconName}: {iconName: any} = route.params;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(
              {name: route.name, merge: true},
              {params: route.params},
            );
          }
        };
        return (
          <Pressable
            onPress={onPress}
            style={
              route.name == midRouteName ? styles.midTabStyle : styles.tabStyle
            }
            key={index}>
            <Icon
              name={iconName}
              size={route.name == midRouteName ? 35 : 28}
              color={
                isFocused
                  ? colors.gold
                  : route.name == midRouteName
                  ? colors.white
                  : colors.grey
              }
            />
          </Pressable>
        );
      })}
    </View>
  );
}
