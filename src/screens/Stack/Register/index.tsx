import {Alert, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';

import globalStyle from '../../../constants/style';
import styles from './style';
import {getItem, setItem} from '../../../mmkv';
import {useNavigation} from '@react-navigation/native';
import { Button, Input } from 'custom-components/src';

const Register = () => {
  const navigation = useNavigation<any>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submit = () => {
    if (!username || !password) {
      return Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz.');
    }

    const data = {
      username,
      password,
    };

    const users = getItem('users');

    let arr = [];
    if (users != undefined) {
      arr = users;
      let a = arr?.find((x: any) => x.username === username);
      if (a) return Alert.alert('Hata', 'Bu kullanıcı adı zaten mevcut.');
    }
    arr.push(data);
    setItem('users', arr);
  };

  const goBackLogin = () => navigation.goBack();

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <Text style={styles.title}>Register</Text>
      <Input
        style={styles.input}
        label={'Username'}
        onChangeText={setUsername}
      />
      <Input
        style={styles.input}
        label={'Password'}
        onChangeText={setPassword}
      />

      <Button
        text="Sign Up"
        onPress={submit}
        containerStyle={styles.button}
        textStyle={styles.buttonTextStyle}
      />
      <Pressable onPress={goBackLogin}>
        <Text style={styles.register}>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default Register;
