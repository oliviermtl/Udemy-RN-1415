import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {AuthContext} from '../providers/AuthProvider';
import {Context as MyContext} from '../context/authContext';
import {AppTabs} from './AppTabs';
import {AuthStack} from './AuthStack';

export const Routes = ({}) => {
  const {state, tryLocalSignin, token} = useContext(MyContext);
  const {user, login, time} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tryLocalSignin();
  }),
    [];

  return (
    <NavigationContainer>
      {state.token ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
