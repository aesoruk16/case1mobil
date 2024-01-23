import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {observer} from 'mobx-react';
import {FontAwesome} from '../../assets/Icons/index';
import styles from './style'; //

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxIcon}>
          <FontAwesome style={styles.boxIcon} name="search" />
        </View>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};

export default observer(SearchBox);
