import {StyleSheet} from 'react-native';
import {settings} from '../../brandSettings/index.js';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: settings.radius,
    backgroundColor: settings.primaryTextColor,
    ...settings.shadow,
    padding: 10,
    width: '100%',
  },
  image: {
    width: 'auto',
    height: 150,
    borderRadius: settings.radius,
    ...settings.shadow,
  },
  productDetail: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
  },
  textPrice: {
    color: settings.primaryColor,
    fontWeight: 'bold',
    fontSize: 17,
  },
  text: {
    color: settings.secondaryColor,
    fontSize: 15,
    marginTop: 10,
  },
  btnArea: {
    backgroundColor: settings.primaryColor,
    height: 35,
    marginTop: 10,
    borderRadius: settings.radius,
    ...settings.shadow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: settings.primaryTextColor,
  },
  detail: {
    marginTop: 15,
    textAlign: 'left',
    borderTopWidth: 3,
    borderTopColor: '#e2e2e2',
    paddingTop: 10,
  },
  detailTitle: {
    fontSize: 20,
    color: settings.primaryColor,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailSize: {
    fontSize: 25,
  },
  DetailBtn: {height: 50},
  heart: {fontSize: 30, color: 'red'},
  heartContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 90,
    zIndex: 999,

    right: 7,
  },
  heartContainerDetail: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 200,
    zIndex: 999,

    right: 20,
  },
});

export default styles;
