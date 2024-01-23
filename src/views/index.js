import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import SearcBox from '../components/SearcBox';
import FilterContainer from '../components/FilterContainer';
import Products from '../components/Products';
import {ScrollView} from 'react-native-gesture-handler';
import Menu from '../components/Menu';
import baseStore from '../stores/base';
import productStore from '../stores/productStore';
class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <SearcBox />
        <FilterContainer />
        
          <Products />
        
        <Menu />
      </SafeAreaView>
    );
  }
}

export default observer(index);
