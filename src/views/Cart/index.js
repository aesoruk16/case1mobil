import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import CartComponent from '../../components/Cart';
import styles from './style';
import baseStore from '../../stores/base';
import {settings} from '../../brandSettings';
class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title="Cart" back={true} />
        <View style={{flex: 1}}>
          <CartComponent />
        </View>
        {baseStore.getCartJson.length == 0 ? null : (
          <View style={styles.totalPriceContainer}>
            <View>
              <Text style={styles.totalPriceText}>Total Price:</Text>
              <Text style={styles.totalPriceAmount}>
                {baseStore.calculateTotalPrice()}
                {settings.currency}
              </Text>
            </View>

            <TouchableOpacity style={styles.btnArea}>
              <Text style={styles.btnText}>Complete</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

export default observer(Cart);
