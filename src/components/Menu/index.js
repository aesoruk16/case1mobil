import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import {FontAwesome} from '../../assets/Icons';
import styles from './style'; //
import baseStore from '../../stores/base';
import productStore from '../../stores/productStore';

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <FontAwesome style={styles.areaIcon} name="home" />
      </View>
      <TouchableOpacity
        onPress={() => Actions.jump('Cart')}
        style={styles.area}>
        {baseStore.getCartJson.length != 0 ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {baseStore.getCartJson.length > 9
                ? '9+'
                : baseStore.getCartJson.length}
            </Text>
          </View>
        ) : null}
        <FontAwesome style={styles.areaIcon} name="shopping-cart" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.jump('Favorites')}
        style={styles.area}>
        {productStore.getFavoriteProducts().length != 0 ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {productStore.getFavoriteProducts().length}
            </Text>
          </View>
        ) : null}
        <FontAwesome style={styles.areaIcon} name="star" />
      </TouchableOpacity>
      <View style={styles.area}>
        <FontAwesome style={styles.areaIcon} name="user" />
      </View>
    </View>
  );
};

export default observer(Menu);
