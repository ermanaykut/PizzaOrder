import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../../constants/style';
import MapView from 'react-native-maps';
import {Icon} from 'custom-components/src';
import styles from './style';

const Addresses = () => {
  const [size, setSize] = useState(36);
  const onRegionChange = (value: any) => {
    console.log(value);
  };

  const onTouchStart = () => setSize(50);
  const onTouchEnd = () => setSize(36);

  return (
    <View style={globalStyle.globalContainer}>
      <MapView
        region={{
          latitude: 37.78825,
          longitude: 28.4324,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={{flex: 1}}
        onRegionChange={onRegionChange}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      />
      <Pressable style={styles.button}>
        <Text>Adres Ekle</Text>
      </Pressable>
      <View style={styles.iconContainer}>
        <Icon name="location-pin : material" size={size} />
      </View>
    </View>
  );
};

export default Addresses;
