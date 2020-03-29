import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {AuthContext} from '../providers/AuthProvider';

const SigninScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);
  return (
    <View>
      <Text style={styles.title}>SigninScreen</Text>
      <Button title="Log me in" onPress={() => login()} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default SigninScreen;
