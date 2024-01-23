import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';

import styles from './style'; //
import {settings} from '../../brandSettings';
import baseStore from '../../stores/base';
import {FontAwesome} from '../../assets/Icons';

const ProductItem = ({item, detail}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        detail ? null : Actions.jump('ProductDetail', {product: item})
      }
      style={styles.container}>
      <TouchableOpacity
        onPress={() => baseStore.addToFavorites(item, !item.favorites)}
        style={[detail ? styles.heartContainerDetail : styles.heartContainer]}>
        {item.favorites ? (
          <FontAwesome style={styles.heart} name="heart" />
        ) : (
          <FontAwesome style={styles.heart} name="heart-o" />
        )}
      </TouchableOpacity>
      <View style={styles.Image}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>

      <View style={styles.productDetail}>
        {detail ? null : (
          <Text style={styles.textPrice}>
            {item.price}
            {settings.currency}
          </Text>
        )}
        <Text style={[styles.text, detail ? styles.detailSize : null]}>
          {item.name}
        </Text>
      </View>
      {detail ? (
        <>
          <Text style={[styles.textPrice]}>Price</Text>
          <Text style={[styles.textPrice, styles.detailSize]}>
            {item.price}
            {settings.currency}
          </Text>
        </>
      ) : null}
      <TouchableOpacity
        onPress={() => baseStore.addToCart(item)}
        style={[styles.btnArea, detail ? styles.DetailBtn : null]}>
        <Text style={[styles.btnText, detail ? styles.detailSize : null]}>
          Add to Cart
        </Text>
      </TouchableOpacity>
      {detail ? (
        <View style={styles.detail}>
          <Text style={styles.detailTitle}>Product Info</Text>
          <Text> {item.description}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default observer(ProductItem);
