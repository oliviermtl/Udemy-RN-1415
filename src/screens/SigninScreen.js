import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {Context as AuthContext} from '../context/authContext';

const SigninScreen = ({navigation}) => {
  const {state, signin} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        errorMessage={state.errorMessage ? state.errorMessage : null}
      />

      <Button title="Sign In" onPress={() => signin({email, password})} />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>New Here? Sign up here!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default SigninScreen;
