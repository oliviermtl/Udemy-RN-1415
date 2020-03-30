import React from 'react';
//import {AuthProvider} from './AuthProvider';
import {Provider as AuthProvider} from '../context/authContext';
import {Routes} from '../routes/Routes';

export const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
