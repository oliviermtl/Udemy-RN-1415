import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {AuthContext} from '../providers/AuthProvider';
import {AppTabs} from './AppTabs';
import {AuthStack} from './AuthStack';

export const Routes = ({}) => {
  const {user, login, time} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if user is logged in
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [login]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};