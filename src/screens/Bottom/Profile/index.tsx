import {Pressable, Text, View} from 'react-native';
import React from 'react';
import globalStyle from '../../../constants/style';
import styles from './style';
import {Icon} from 'custom-components/src';
import {colors} from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {PAGES} from '../../pages';

const Profile = () => {
  const navigation = useNavigation<any>();
  const navigateToAddresses = () => {
    navigation.navigate(PAGES.ADDRESSES.name);
  };

  return (
    <View style={globalStyle.globalContainer}>
      <Pressable onPress={navigateToAddresses} style={styles.addressContainer}>
        <Icon name="location-pin : material" size={24} color={colors.green} />
        <Text style={styles.addressTitle}>Adreslerim</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
