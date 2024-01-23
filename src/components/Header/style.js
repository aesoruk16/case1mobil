import {StyleSheet} from 'react-native';
import {settings} from '../../brandSettings/index.js';
const styles = StyleSheet.create({
  header: {
    backgroundColor: settings.primaryColor,
    height: 55,
    ...settings.shadow,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems:'center',
    alignContent:'center'
  },
  logo: {
    justifyContent: 'center',
    flex: 1,
    margin: 15,
    marginTop:0,
    marginBottom:0
  },
  logoText: {
    color: settings.primaryTextColor,
    fontSize: 25,
  },
  leftIcon: {
    color: 'white',
    fontSize: 40,
    width:50,
    marginLeft:15,
  },
});

export default styles;
