import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';

import styles from './style'; //
import {settings} from '../../brandSettings';
import baseStore from '../../stores/base';
import Stepper from './Stepper/Stepper';

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.productDetail}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.textPrice}>
          {item.price}
          {settings.currency}
        </Text>
      </View>
      <View>
        <Stepper product={item} />
      </View>
    </View>
  );
};

export default observer(CartItem);
