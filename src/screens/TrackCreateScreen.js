import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TrackCreateScreen = () => {
  return (
    <View>
      <Text style={styles.title}>TrackCreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default TrackCreateScreen;
