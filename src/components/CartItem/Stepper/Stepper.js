import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';

import styles from './stepperStyle'; //
import {FontAwesome} from '../../../assets/Icons';
import baseStore from '../../../stores/base';

const Stepper = ({product}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => baseStore.addToCart(product, 0)}
        style={styles.items}>
        <FontAwesome name="minus" />
      </TouchableOpacity>
      <View style={[styles.items, styles.number]}>
        <Text style={styles.numberText}>{product.quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={() => baseStore.addToCart(product)}
        style={styles.items}>
        <FontAwesome name="plus" />
      </TouchableOpacity>
    </View>
  );
};

export default observer(Stepper);
