import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SigninScreen = () => {
  return (
    <View>
      <Text style={styles.title}>SigninScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default SigninScreen;
