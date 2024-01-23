import {StyleSheet} from 'react-native';
import {settings} from '../../brandSettings/index.js';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
    flexDirection: 'row',
    padding: 5,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 9,
  },
  area: {
    flex: 1,
    alignItems: 'center',
    zIndex: 2,
    height: '100%',
    justifyContent: 'center',
  },
  areaIcon: {
    fontSize: 27,
  },
  badge: {
    backgroundColor: 'red',
    width: 15,
    height: 15,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 5,
    right: 20,
  },
  badgeText: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
  },
});

export default styles;
