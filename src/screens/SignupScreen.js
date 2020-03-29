import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SignupScreen = () => {
  return (
    <View>
      <Text style={styles.title}>SignupScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default SignupScreen;
