import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TrackListScreen = () => {
  return (
    <View>
      <Text style={styles.title}>TrackListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default TrackListScreen;
