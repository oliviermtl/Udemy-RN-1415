import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

export const AuthStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={SigninScreen} />
      <Stack.Screen
        name="Signup"
        options={{headerTitle: 'Register you!'}}
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
};
