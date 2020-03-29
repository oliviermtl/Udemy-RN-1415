import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';

import {AuthContext} from '../providers/AuthProvider';

import TrackListScreen from '../screens/TrackListScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';

const Stack = createStackNavigator();

export const TracksStack = () => {
  const {logout} = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{
          headerRight: () => (
            <Button onPress={() => logout()} title="Logout" color="red" />
          ),
        }}
      />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};
