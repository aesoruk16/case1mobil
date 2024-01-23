import {StyleSheet} from 'react-native';
import {settings} from '../../brandSettings/index.js';
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#e2e2e2',
    margin: 10,
    marginBottom: 0,
    borderRadius: settings.radius,
    padding: 10,
    ...settings.shadow,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textPrice: {
    color: settings.primaryColor,
    fontWeight: 'bold',
  },
});

export default styles;
