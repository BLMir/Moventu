import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../components';

const Welcome = () => (
  <View style={styles.container}>
    <Text style={styles.logo}>Moventu</Text>
    <Text style={styles.slogan}>Get lost. A bit.</Text>
  </View>
);

Welcome.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(0, 0%, 5%)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    color: 'hsl(0, 0%, 95%)',
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 50
  },
  slogan: {
    color: 'hsl(0, 0%, 90%)',
    fontSize: 36
  }
});

export default Welcome;
