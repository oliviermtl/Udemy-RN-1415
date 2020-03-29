import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext({
  user: null,
  time: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [time, setTime] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        time,
        login: () => {
          const fakeUser = {username: 'Bob'};
          setUser(fakeUser);
          setTime(JSON.stringify(new Date()));
          AsyncStorage.setItem('User', JSON.stringify(fakeUser));
          AsyncStorage.setItem('timeLoggedIn', JSON.stringify(new Date()));
        },

        logout: () => {
          setUser(null);
          setTime(null);
          AsyncStorage.removeItem('User');
          AsyncStorage.removeItem('timeLoggedIn');
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
