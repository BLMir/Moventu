import React from 'react';
import { Stylesheet, Text, View } from 'react-native';

import { Button } from '../components';

const Welcome = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Moventu</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(0, 0%, 5%)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'hsl(0, 0%, 95%)',
    fontSize: 60
  }
});

export default Welcome;
