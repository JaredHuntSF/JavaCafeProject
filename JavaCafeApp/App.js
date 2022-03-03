/**
 * Main
 * @authors Mo Auguste, 
 * @date    2022-03-02 21:32:48
 * @version 1.0.0
 */



import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import Colors from './constants/colors';
import Home from './screens/Home';
import colors from './constants/colors';



export default function App() {

  return (
    <View style={styles.screen}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary
  }
});

/*  THIS IS THE DEFAULT CODE
export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={() => setOutputText('The text changed!')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/
