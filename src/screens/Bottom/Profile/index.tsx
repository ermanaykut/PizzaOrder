import {Text, View} from 'react-native';
import React from 'react';
import globalStyle from '../../../constants/style';
import styles from './style';
import {Icon} from 'custom-components/src';
import {colors} from '../../../constants/colors';

const Profile = () => {
  return (
    <View style={globalStyle.globalContainer}>
      <View style={styles.addressContainer}>
        <Icon name="location-pin : material" size={24} color={colors.green} />
        <Text style={styles.addressTitle}>Adreslerim</Text>
      </View>
    </View>
  );
};

export default Profile;
