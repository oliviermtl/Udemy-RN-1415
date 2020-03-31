import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {Context as AuthContext} from '../context/authContext';

import TrackListScreen from '../screens/TrackListScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';

const Stack = createStackNavigator();

export const TracksStack = () => {
  const {logout} = useContext(AuthContext);
  const myIcon = <Icon name="logout" size={30} color="blue" />;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => logout()}
              title="Logout"
              color="red">
              {myIcon}
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};
