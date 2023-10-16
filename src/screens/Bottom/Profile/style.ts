import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  addressContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressTitle: {
    color: colors.darkgreen,
    fontWeight: '500',
    marginLeft: 12,
    fontSize: 16,
  },
});

export default styles;
