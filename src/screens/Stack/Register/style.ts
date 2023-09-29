import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
  },
  button: {
    height: 42,
    backgroundColor: colors.green,
    marginTop: 20,
  },
  title: {
    color: colors.darkblue,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 40,
  },
  buttonTextStyle: {
    color: colors.white,
    fontSize: 16,
  },
  register: {
    color: colors.green,
    marginTop: 20,
  },
});

export default styles;
