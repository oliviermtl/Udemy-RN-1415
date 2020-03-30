import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({email, password}) => {
    console.log('Trying to signup...');
    try {
      const response = await trackerApi.post('/signup', {email, password});
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
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
  {isSignedIn: false},
);
