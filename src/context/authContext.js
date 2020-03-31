import AsyncStorage from '@react-native-community/async-storage';
import {useState} from 'react';
import * as RootNavigation from '../RootNavigation';

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {errorMessage: '', token: action.payload};
    case 'logout':
      return {...state, token: null};
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({email, password}) => {
    console.log('Trying to signup...');
    try {
      const response = await trackerApi.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signup', payload: response.data.token});
      console.log(response.data);
      RootNavigation.navigate('Login', {token: response.data.token});
    } catch (error) {
      console.log('Error during signup');
      dispatch({type: 'add_error', payload: 'Error during signup'});
    }
  };
};

const signin = dispatch => {
  return async ({email, password}) => {
    console.log('Trying to signin...');
    try {
      const response = await trackerApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signup', payload: response.data.token});
      console.log(response.data);
      // RootNavigation.navigate('Login', {token: response.data.token});
    } catch (error) {
      console.log('Error during signin');
      dispatch({type: 'add_error', payload: 'Error during signup'});
    }
  };
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'signup', payload: token});
    // navigate('TrackList');
  } else {
    // navigate('Signup');
  }
};

const logout = dispatch => {
  return async () => {
    try {
      await AsyncStorage.setItem('token', '');
      dispatch({type: 'logout', payload: null});
    } catch (error) {
      console.log(error);
    }
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, logout, tryLocalSignin},
  {token: null, errorMessage: ''},
);
