import {StyleSheet} from 'react-native';
import {colors} from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightLeftContainer: {
    width: '70%',
  },
  rightContainer: {
    width: '75%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 4,
  },
  name: {
    color: colors.darkgreen,
  },
  description: {
    color: colors.grey,
    fontSize: 12,
  },
  price: {
    color: colors.green,
    fontSize: 20,
  },
  countAndPriceContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30%',
  },
  disabledIcon: {
    backgroundColor: colors.green + 50,
  },
  countText: {
    color: colors.green,
    fontWeight: '600',
    fontSize: 20,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'flex-end',
  },
  iconContainer: {
    padding: 3,
    backgroundColor: colors.green,
    borderRadius: 100,
  },
  size: {
    color: colors.green,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default styles;
