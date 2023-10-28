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
  title: {
    color: colors.darkgreen,
  },
  price: {
    fontSize: 18,
    color: colors.darkgreen,
  },
  plus: {
    color: colors.green,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.darkgreen,
    marginRight: 12,
  },
  iconContainer: {
    position: 'absolute',
    top: -10,
    width: 30,
    height: 30,
    right: -12,
  },
});

export default styles;
