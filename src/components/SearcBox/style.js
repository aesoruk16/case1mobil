import {StyleSheet} from 'react-native';
import {settings} from '../../brandSettings/index.js';
const styles = StyleSheet.create({
  container: {},
  box: {
    borderColor: '#e2e2e2',
    backgroundColor: settings.secondaryColor,
    margin: 10,
    padding: 7,
    borderRadius: settings.radius,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    ...settings.shadow,
  },
  boxIcon: {
    color: settings.primaryTextColor,
    fontSize: 20,
    padding: 5,
  },
  input: {
    fontSize: 15,
    height: 40,
    paddingLeft: 5,
    color: settings.primaryTextColor,
  },
  logoText: {
    color: settings.primaryTextColor,
    fontSize: 25,
  },
});

export default styles;
