import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TrackDetailScreen = () => {
  return (
    <View>
      <Text style={styles.title}>TrackDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default TrackDetailScreen;
