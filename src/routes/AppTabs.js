import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountScreen from '../screens/AccountScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import {TracksStack} from './TracksStack';

const Tabs = createBottomTabNavigator();

export const AppTabs = ({}) => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="Tracks" component={TracksStack} />
      <Tabs.Screen name="Track Create" component={TrackCreateScreen} />
      <Tabs.Screen name="Account" component={AccountScreen} />
    </Tabs.Navigator>
  );
};
