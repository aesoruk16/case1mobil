import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {observer} from 'mobx-react';

import styles from './style'; //
import {FontAwesome} from '../../assets/Icons';
import FilterList from '../FilterList';
import productStore from '../../stores/productStore';

const FilterContainer = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.text}>Filters:</Text>
      </View>
      <TouchableOpacity onPress={toggleModal} style={styles.FilterArea}>
        <Text style={styles.text}>Select Filter</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.iconContent}>
            <Text style={styles.text}>Filter</Text>
            <FontAwesome name="close" style={styles.icon} />
          </TouchableOpacity>
          <ScrollView style={styles.modalFilter}>
            <FilterList
              title={'Sort By'}
              selectedData={'sortBy'}
              type={'radio'}
            />
            <FilterList
              title={'Brands'}
              searchType={2}
              selectedData={'brands'}
              type={'checkbox'}
            />
            <FilterList
              title={'Model'}
              searchType={3}
              selectedData={'model'}
              type={'checkbox'}
            />
          </ScrollView>
          <TouchableOpacity onPress={toggleModal} style={styles.filterBtn}>
            <Text style={styles.filterBtnText}>
              Filter ({productStore.visibleProducts.length})
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default observer(FilterContainer);
