// components/Products.js
import React, {useEffect, useRef, useCallback} from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  Text,
  ScrollView,
} from 'react-native';
import {observer} from 'mobx-react';
import ProductItem from '../ProductItem';
import styles from '../Products/style';
import productStore from '../../stores/productStore';

const Products = ({custom}) => {
  const scrollViewRef = useRef(null);

  const handleScroll = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  if (custom == 'favorites') {
    return (
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={productStore.getFavoriteProducts()}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ProductItem {...item} />}
          />
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView
        ref={scrollViewRef}
        onScroll={({nativeEvent}) => {
          if (handleScroll(nativeEvent)) {
            productStore.loadProducts(custom);
          }
        }}
        scrollEventThrottle={400}>
        <View style={styles.container}>
          {/* <Text>{JSON.stringify(productStore.visibleProductsJson)}</Text> */}
          {/* {productStore.visibleProductsJson.length != 0 ? ( */}
          <FlatList
            data={productStore.visibleProductsJson}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ProductItem {...item} />}
          />
          {/* ) : null} */}
        </View>
      </ScrollView>
    );
  }
};

export default observer(Products);
