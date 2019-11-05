import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

import Colors from '../constants/Colors';

const NewsStory = props => {
  return (
    <View style={styles.fullWrapper}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('../images/audio-cassette-cassette-tape-1626481.jpg')}
        />
      </View>
      <View style={styles.storyWrapper}>
        <Text style={styles.storyHeader}>Sed Vitae Varius Leo</Text>
        <Text style={styles.storyBody}>
          Vivamus suscipit scelerisque arcu. Vivamus laoreet ullamcorper ex.
          Cras sit amet fermentum leo, eu efficitur nunc...
        </Text>
        <Button title="Read More" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
  },
  imageWrapper: {
    flex: 1,
    height: 145,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  storyWrapper: {
    flex: 2,
    height: 145,
    backgroundColor: Colors.lightGray,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  storyHeader: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
});

export default NewsStory;
