import AsyncStorage from '@react-native-community/async-storage';

import * as RootNavigation from '../RootNavigation';

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {errorMessage: '', token: action.payload};
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
  return ({email, password}) => {};
};

const logout = dispatch => {
  return () => {};
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, logout},
  {isSignedIn: false, errorMessage: ''},
);
