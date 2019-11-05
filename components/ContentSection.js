import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import PageHeader from '../components/PageHeader';

const ContentSection = props => {
  return (
    <View style={styles.contentWrap}>
      <PageHeader text={props.header} />
      <View style={styles.content}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrap: {
    backgroundColor: Colors.lightBlue,
    width: '90%',
    paddingBottom: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  content: {
    marginHorizontal: 10,
  },
});

export default ContentSection;
