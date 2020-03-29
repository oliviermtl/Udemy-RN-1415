import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.title}>AccountScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default AccountScreen;
