import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const PageHeader = props => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    backgroundColor: Colors.darkPurple,
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  headerText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PageHeader;
