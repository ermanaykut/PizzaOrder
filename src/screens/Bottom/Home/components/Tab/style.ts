import {StyleSheet} from 'react-native';
import {colors} from '../../../../../constants/colors';

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  subTabContainer: {
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: colors.green + 10,
  },
  activeSubTabContainer: {
    backgroundColor: colors.green,
  },
  subTabText: {
    color: colors.black,
    fontWeight: '300',
  },
  activeSubTabText: {
    color: colors.white,
    fontWeight: '500',
  },
});

export default styles;
