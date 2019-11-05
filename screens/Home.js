import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/Colors';
import Navbar from '../components/Navbar';
import ContentSection from '../components/ContentSection';
import PageHeader from '../components/PageHeader';

const Home = props => {
  return (
    <View style={styles.screen}>
      <Navbar navigate={props.navigation.navigate} activeLink="home" />
      <ContentSection header="Home">
        <Text style={styles.homeBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          bibendum nunc eu dolor scelerisque sodales. Vivamus accumsan
          scelerisque massa, imperdiet convallis ante tincidunt ut. Mauris
          tortor magna, dapibus ac lacus at, sodales interdum libero.
        </Text>
      </ContentSection>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.deepPurple,
    alignItems: 'center',
  },
  homeBody: {
    fontSize: 18,
    marginTop: 10,
    lineHeight: 25,
  },
});

export default Home;
