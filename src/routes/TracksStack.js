import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TrackListScreen from '../screens/TrackListScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';

const Stack = createStackNavigator();

export const AuthStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Track List" component={TrackListScreen} />
      <Stack.Screen
        name="Track Detail"
        options={{headerTitle: 'Track Detail'}}
        component={TrackDetailScreen}
      />
    </Stack.Navigator>
  );
};
