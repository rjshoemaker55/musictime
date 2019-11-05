import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Colors from '../constants/Colors';
import NavbarButton from './NavbarButton';

const Navbar = props => {
  return (
    <View style={styles.fullWrapper}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Music Time</Text>
        <TouchableWithoutFeedback onPress={props.navigate.bind(this, 'Login')}>
          <Text style={styles.logoutButton}>Logout</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonWrapper}>
        <NavbarButton
          onPress={props.navigate.bind(this, 'News')}
          style={styles.newsButton}>
          News
        </NavbarButton>
        <NavbarButton
          onPress={props.navigate.bind(this, 'Home')}
          style={styles.homeButton}>
          Home
        </NavbarButton>
        <NavbarButton
          onPress={props.navigate.bind(this, 'Contact')}
          style={styles.contactButton}>
          Contact
        </NavbarButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullWrapper: {
    width: '100%',
    height: Platform.OS === 'ios' ? 150 : 120,
  },
  headerWrapper: {
    width: '100%',
    height: '66%',
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 25 : 0,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonWrapper: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});

export default Navbar;
