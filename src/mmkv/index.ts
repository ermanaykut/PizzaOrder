import {MMKV} from 'react-native-mmkv';

const mmkv = new MMKV();

export const setItem = (storageName: string, data: any) => {
  mmkv.set(storageName, JSON.stringify(data));
};

export const getItem = (storageName: string) => {
  const data = mmkv.getString(storageName);
  if (typeof data === 'string') return JSON.parse(data);
  return undefined;
};
