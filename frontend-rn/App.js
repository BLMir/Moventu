import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading, Asset } from 'expo';

import Navigation from './navigation';
import { Block } from './components';
import * as constants from './constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(0, 0%, 5%)',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
