import {StyleSheet} from 'react-native';
import {settings} from '../../../brandSettings';
const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'row',
  },
  items: {
    width: 33,
    borderWidth: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: settings.radius,
    borderColor: '#e2e2e2',
    backgroundColor: 'white',
    height: 33,
    marginLeft: 2,
  },
  number: {
    backgroundColor: settings.primaryColor,
  },
  numberText: {color: 'white', fontWeight: 'bold'},
});

export default styles;
