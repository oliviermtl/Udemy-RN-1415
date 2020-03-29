import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>TrackListScreen</Text>
      <Button
        title={'go to track detail'}
        onPress={() => {
          navigation.navigate('TrackDetail');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default TrackListScreen;
