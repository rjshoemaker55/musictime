import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Colors from '../constants/Colors';
import Navbar from '../components/Navbar';
import ContentSection from '../components/ContentSection';
import NewsStory from '../components/NewsStory';

const News = props => {
  return (
    <View style={styles.screen}>
      <Navbar navigate={props.navigation.navigate} activeLink="news" />
      <ContentSection header="News">
        <ScrollView>
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
        </ScrollView>
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
  header: {
    color: 'white',
  },
});

export default News;
