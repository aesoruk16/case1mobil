import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import {Actions} from 'react-native-router-flux';

import styles from './style'; //
import {FontAwesome} from '../../assets/Icons';

const Header = ({back, title}) => {
  return (
    <View style={styles.header}>
      {back ? (
        <TouchableOpacity onPress={() => Actions.pop()}>
          <FontAwesome style={styles.leftIcon} name="arrow-left" />
        </TouchableOpacity>
      ) : null}
      <View style={styles.logo}>
        <Text style={styles.logoText}>{title ? title : 'A-Market'}</Text>
      </View>
    </View>
  );
};

export default observer(Header);
