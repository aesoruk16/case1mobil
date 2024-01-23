import React from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {observer} from 'mobx-react';
import SearchBox from '../../components/SearcBox';
import baseStore from '../../stores/base';
import {sortBy} from '../../data/index';
import {StyleSheet} from 'react-native';
import styles from './style';
import {Fontisto} from '../../assets/Icons';
const CustomFilter = ({title, selectedData, type, searchType}) => {
  let data, name, varB;
  let method;

  switch (selectedData) {
    case 'sortBy':
      data = sortBy;
      name = 'name';
      varB = 'selectedSort';
      method = (selectedItem) => baseStore.changeSelectedSort(selectedItem);
      break;
    case 'brands':
      data = baseStore.brands;
      name = 'brand';
      varB = 'selectedBrands';

      method = (selectedItem) => baseStore.changeSelectedBrands(selectedItem);
      break;
    case 'model':
      data = baseStore.models;
      varB = 'selectedModel';

      name = 'model';
      method = (selectedItem) => baseStore.changeSelectedModel(selectedItem);
      break;
    default:
      data = [];
  }
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => method(item.key ? item.key : item[name])}
      style={styles.filterItem}>
      {type == 'radio' ? (
        <View style={styles.select}>
          {(item.key ? item.key : item[name]) == baseStore[varB] ? (
            <Fontisto style={styles.icon} name="radio-btn-active" />
          ) : (
            <Fontisto style={styles.icon} name="radio-btn-passive" />
          )}
        </View>
      ) : (
        <View style={styles.select}>
          {baseStore.controlFilter(varB, item, name) ? (
            <Fontisto style={styles.icon} name="radio-btn-active" />
          ) : (
            <Fontisto style={styles.icon} name="radio-btn-passive" />
          )}
        </View>
      )}
      <Text style={styles.filterItemText}>{item[name]}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.filterCard} key={baseStore[varB]}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>
          {title}
          {type == 'checkbox' ? <Text> ({baseStore[varB].length})</Text> : null}
        </Text>
      </View>
      <View style={styles.filterCardChild}>
        {type === 'checkbox' ? (
          <View>
            <SearchBox type={searchType} filter={name} />
          </View>
        ) : null}
        <View>
          <FlatList
            nestedScrollEnabled
            data={data}
            // extraData={baseStore[varB]}
            keyExtractor={(item) => (item.key ? item.key : item[name])}
            renderItem={renderItem}
            style={styles.listFilter}
          />
        </View>
      </View>
    </View>
  );
};

export default observer(CustomFilter);
