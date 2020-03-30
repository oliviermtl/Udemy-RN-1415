import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/authContext';

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(state);
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

      <Button title="Sign Up" onPress={() => signup({email, password})} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default SignupScreen;
