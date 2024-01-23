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

  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0,
    borderColor: '#e2e2e2',
  },
  iconContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalFilter: {
    borderTopWidth: 1,
    paddingTop: 20,
    flex: 1,
    marginTop: 10,
    borderColor: '#e2e2e2',
  },
  filterBtn: {
    backgroundColor: settings.primaryColor,
    height: 50,
    borderRadius: settings.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterBtnText: {
    color: 'white',
    fontSize: 20,
  },
  icon: {
    fontSize: 30,

    color: settings.primaryColor,
  },
});

export default styles;
