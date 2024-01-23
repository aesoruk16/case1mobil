import {StyleSheet} from 'react-native';
import {settings} from '../../brandSettings/index.js';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    margin: 15,
  },
  logo: {
    justifyContent: 'center',
    flex: 1,
    margin: 15,
  },
  logoText: {
    color: settings.primaryTextColor,
    fontSize: 25,
  },
});

export default styles;
