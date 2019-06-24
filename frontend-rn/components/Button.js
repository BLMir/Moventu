import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from '../constants';

const Button = () => (
  <TouchableOpacity style={styles.button}>{children}</TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 100
  }
});

export default Button;
