import {StyleSheet} from 'react-native';
import {settings} from '../../brandSettings/index.js';
const styles = StyleSheet.create({
  filterCard: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#e2e2e2',
    borderRadius: settings.radius,
    ...settings.shadow,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  titleArea: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#e2e2e2',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  filterCardChild: {},
  mb3: {
    marginBottom: 3,
  },
  listFilter: {
    height: 200,
  },
  filterItem: {
    flexDirection: 'row',
    padding: 15,
    paddingBottom: 0,
    alignItems: 'center',
  },
  select: {marginRight: 10},
  icon: {
    fontSize: 17,
  },
  filterItemText: {fontSize: 17},
});

export default styles;
