import {StyleSheet} from 'react-native';
import {settings} from '../../brandSettings/index.js';
const styles = StyleSheet.create({
  totalPriceContainer: {
    padding: 30,
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
    backgroundColor: 'white',
  },
  totalPriceText: {
    fontSize: 15,
  },
  totalPriceAmount: {
    fontSize: 20,
    color: settings.primaryColor,
    fontWeight: 'bold',
  },
  btnArea: {
    backgroundColor: settings.primaryColor,
    height: 50,
    marginTop:10,
    borderRadius: settings.radius,
    ...settings.shadow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: settings.primaryTextColor,
    fontSize:20
  },
});

export default styles;
