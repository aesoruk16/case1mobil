import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';

import styles from './style'; //

const FilterContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.text}>Filters:</Text>
      </View>
      <View style={styles.FilterArea}>
        <Text style={styles.text}>Select Filter</Text>
      </View>
    </View>
  );
};

export default observer(FilterContainer);
