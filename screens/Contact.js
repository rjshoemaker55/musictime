import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import Navbar from '../components/Navbar';
import ContentSection from '../components/ContentSection';
import PageHeader from '../components/PageHeader';

const Contact = props => {
  return (
    <View style={styles.screen}>
      <Navbar navigate={props.navigation.navigate} activeLink="contact" />
      <ContentSection header="Contact">
        <View style={styles.sectionWrapper}>
          <Text style={styles.sectionHeader}>Phone</Text>
          <Text style={styles.sectionBody}>(555)-223-8201</Text>
        </View>
        <View style={styles.sectionWrapper}>
          <Text style={styles.sectionHeader}>Address</Text>
          <Text style={styles.sectionBody}>25 Happy Street</Text>
          <Text style={styles.sectionBody}>Baltimore, MD 82957</Text>
        </View>
        <View style={styles.sectionWrapper}>
          <Text style={styles.sectionHeader}>Email</Text>
          <Text style={styles.sectionBody}>info@musictime.com</Text>
        </View>
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
  sectionWrapper: {
    marginTop: 20,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Contact;
