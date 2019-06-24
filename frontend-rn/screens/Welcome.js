import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { theme } from '../constants';
import Button from '../components';

const Welcome = () => (
  <View style={styles.container}>
    <Text style={styles.logo}>Moventu</Text>
    <Text style={styles.slogan}>Get lost. A bit.</Text>
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text>START</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.link}>Learn more</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.link}>Terms of service</Text>
    </TouchableOpacity>
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
    fontSize: 36,
    marginBottom: 140
  },
  button: {
    backgroundColor: 'cyan',
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  link: {
    color: 'hsl(0, 0%, 90%)',
    marginBottom: 30
  }
});

export default Welcome;
