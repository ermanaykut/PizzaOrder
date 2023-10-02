import {StyleSheet} from 'react-native';
import {colors} from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBlockColor: colors.green + 60,
    paddingHorizontal: 8,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    color: colors.darkgreen,
  },
  plus: {
    color: colors.green,
  },
});

export default styles;
