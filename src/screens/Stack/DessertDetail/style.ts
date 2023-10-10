import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 230,
    marginBottom: 20,
  },
  bottomContainer: {
    paddingHorizontal: 12,
  },
  name: {
    color: colors.babypink,
    fontSize: 22,
    fontWeight:'700',
    marginBottom: 20,
  },
  description: {
    color: colors.placeholder,
  },
  priceContainer: {
    backgroundColor: colors.babypink + 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '40%',
  },
  iconContainer: {
    padding: 2,
    backgroundColor: colors.white,
    borderRadius: 100,
  },
  disabledIcon: {
    backgroundColor: colors.white + 90,
  },
  countText: {
    color: colors.black,
    fontWeight: '600',
    fontSize: 20,
  },
  subPriceContainer: {
    width: '20%',
    alignItems: 'center',
  },
  priceText: {
    color: colors.black,
    fontSize: 24,
  },
  addToCartContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  addToCartText: {
    color: colors.darkgreen,
  },
});

export default styles;
