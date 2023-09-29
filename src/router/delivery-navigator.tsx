import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';
import {Cart, Home, Profile} from '../screens';

const Tab = createBottomTabNavigator();

export default function DeliveryNavigator() {
  return (
    <Tab.Navigator tabBar={(props: any) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{title: 'Home'}}
        initialParams={{iconName: 'home : material'}}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        initialParams={{iconName: 'shoppingcart : ant'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{iconName: 'user : ant'}}
      />
    </Tab.Navigator>
  );
}
