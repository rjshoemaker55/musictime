import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors.js';

const MusicTimeTitle = props => {
  return (
    <View style={{ ...styles.titleContainer, ...props.style }}>
      <Text style={styles.titleText}>Music Time</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: Colors.brightPink,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50,
  },
});

export default MusicTimeTitle;
