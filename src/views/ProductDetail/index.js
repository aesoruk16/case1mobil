import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity,ScrollView} from 'react-native';
import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';
import Menu from '../../components/Menu';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {product} = this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title={product.name} back={true} />
       <ScrollView>
       <ProductItem item={product} detail={true} />
     
       </ScrollView>
       <Menu/>
      </SafeAreaView>
    );
  }
}

export default observer(ProductDetail);
