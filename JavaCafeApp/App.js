/**
 * Main
 * @authors Mo Auguste, Jared
 * @date    2022-03-02 21:32:48
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStore, combineReducers } from 'redux'; //create a root reducer to combine multiple reducers into a single one
import { Provider } from 'react-redux'; //Provider app is wrapped around our application to, well, provide something
import productsReducer from './store/reducers/products';




import Home from './screens/Home';
import AccountRegistration from './screens/AccountRegistration';
import colors from './constants/colors';
import Header from './components/Header';
import Login from './screens/Login';
import AccountInfo from './screens/AccountInformation';
import Menu from './screens/Menu';



const rootReducer = combineReducers({
  products: productsReducer
})

const store = createStore(rootReducer) //Takes rootReducer as a single argument


const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <View style={styles.screen}>
      {/** screens are commented out, to test other screens */}
      {/**<Header />*/}
      {/**<Home />*/}
      <AccountRegistration />
      {/**<Button />**/}
    </View>

    // <Provider store={store}>

    // </Provider>
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
