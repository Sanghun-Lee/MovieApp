import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Props from './Props';
import Map from './Map';
import State from './State';
import Fetch from './Fetch';
import Axios from './Axios';

export default function App () {
  return (
    <View style={styles.container}>
      <Axios />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
