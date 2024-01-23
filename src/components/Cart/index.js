import React, {useEffect, useRef, useCallback} from 'react';
import {FlatList, View, ActivityIndicator, Text} from 'react-native';
import {observer} from 'mobx-react';
import CartItem from '../CartItem';
import styles from '../Cart/style';
import baseStore from '../../stores/base';
import {FontAwesome} from '../../assets/Icons';

const Cart = () => {
  return (
    <View>
      {baseStore.getCartJson.length == 0 ? (
        <View style={styles.Item}>
          <FontAwesome style={styles.text} name="warning" />
          <Text style={styles.text}>Cart is Empty !</Text>
        </View>
      ) : (
        <FlatList
          data={baseStore.getCartJson}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <CartItem {...item} />}
        />
      )}
      {/* ) : null} */}
    </View>
  );
};

export default observer(Cart);
