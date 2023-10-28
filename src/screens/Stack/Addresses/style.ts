import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: '50%',
    right: '50%',
  },
  button: {
    width: '100%',
    height: 42,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
export default styles;
