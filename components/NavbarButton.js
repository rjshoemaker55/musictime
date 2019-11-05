import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';

const NavbarButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.buttonWrap, ...props.style }}
      activeOpacity={0.5}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrap: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.brightPink,
    width: 139,
    flexDirection: 'row',
  },
});

export default NavbarButton;
