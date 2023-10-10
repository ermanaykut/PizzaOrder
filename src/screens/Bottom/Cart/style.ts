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
  emptyCartContainer:{
    borderWidth:1,
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
  textContainer:{

    marginVertical:15,
  },
  guiderText:{
    fontSize:16,
    lineHeight:20
  },
  imageContainer:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginVertical:15,
  },
  pizzaImage:{
    width:60,
    height:60,
    borderWidth:1,
  },
  cakeImage:{
    width:60,
    height:60,
  },

});

export default styles;
