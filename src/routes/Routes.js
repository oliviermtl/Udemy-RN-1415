import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {AuthContext} from '../providers/AuthProvider';
import {Context as MyContext} from '../context/authContext';
import {AppTabs} from './AppTabs';
import {AuthStack} from './AuthStack';

export const Routes = ({}) => {
  const {state, token} = useContext(MyContext);
  const {user, login, time} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // check if user is logged in
  //   AsyncStorage.getItem('token')
  //     .then(userString => {
  //       if (userString) {
  //         login();
  //       }
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, [token]);

  // if (loading) {
  //   return (
  //     <View>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer>
      {state.token ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
