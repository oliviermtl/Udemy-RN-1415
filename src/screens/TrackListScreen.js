import React from 'react';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';

import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const TrackListScreen = ({navigation}) => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 49.34118 + i * 0.001,
      longitude: -119.57683 + i * 0.001,
    });
  }
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 49.3411899,
          longitude: -119.5768329,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Polyline coordinates={points} />
      </MapView>
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
  container: {flex: 1, justifyContent: 'center'},
  map: {
    flex: 1,
  },
});

export default TrackListScreen;
