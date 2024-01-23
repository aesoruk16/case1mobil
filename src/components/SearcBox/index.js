import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {observer} from 'mobx-react';
import {FontAwesome} from '../../assets/Icons/index';
import styles from './style'; //
import baseStore from '../../stores/base';

const SearchBox = ({type, filter}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (text) => {
    setSearchValue(text);
    baseStore.SearchBox(type, text, filter);
  };

  const handleClearSearch = () => {
    setSearchValue('');
    baseStore.SearchBox(type, '', filter);
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxIcon}>
          <FontAwesome style={styles.boxIcon} name="search" />
        </View>
        <TextInput
          type="text"
          placeholder="Search"
          value={searchValue}
          onChangeText={handleSearchChange}
          style={styles.input}
          autoCorrect={false}
          autoCompleteType="off"
        />

        <TouchableOpacity
          onPress={handleClearSearch}
          style={styles.boxIconRight}>
          <FontAwesome style={styles.boxIcon} name="trash" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default observer(SearchBox);
