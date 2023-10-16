import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../constants/colors';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  clearAllButton: {
    backgroundColor: colors.green,
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 100,
  },
  clearAllText: {
    color: colors.white,
    fontSize: 12,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    width: '100%',
    textAlign: 'right',
  },
  bottomRightContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: '30%',
  },
  emptyCartContainer: {
    height: height * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  guiderText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
  pizzaImage: {
    width: 60,
    height: 60,
  },
  cakeImage: {
    width: 60,
    height: 60,
  },
});

export default styles;
