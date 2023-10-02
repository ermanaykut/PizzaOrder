import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

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
});

export default styles;
