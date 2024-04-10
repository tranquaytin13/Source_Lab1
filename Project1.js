import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MyStyle = StyleSheet.create({
  ViewStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle:
  {
    color: 'black'
  }
});

