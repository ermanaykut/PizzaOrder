import {Alert, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';

import globalStyle from '../../../constants/style';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {PAGES} from '../../pages';
import {getItem} from '../../../mmkv';
import { Button, Input } from 'custom-components/src';

const Login = () => {
  const navigation = useNavigation<any>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submit = () => {
    if (!username || !password) {
      return Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz.');
    }
    let users = getItem('users');
    if (users != undefined) {
      let isThereUser = users?.find((x: any) => x.username === username);
      if (!isThereUser) return Alert.alert('Hata', 'Kullanıcı Bulunamadı');
      users?.map((x: any) => {
        if (x?.username === username)
          if (x?.password === password) {
            navigation.navigate(PAGES.BOTTOM.name, {username});
          } else {
            return Alert.alert('Hata', 'Parola hatalı');
          }
      });
    }
  };

  const navigateRegister = () => navigation.navigate(PAGES.REGISTER.name);

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <Text style={styles.title}>Login</Text>
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
        text="Sign In"
        onPress={submit}
        containerStyle={styles.button}
        textStyle={styles.buttonTextStyle}
      />

      <Pressable onPress={navigateRegister}>
        <Text style={styles.register}>Register</Text>
      </Pressable>
    </View>
  );
};

export default Login;
