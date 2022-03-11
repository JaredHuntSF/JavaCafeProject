/**
 * Main
 * @authors Mo Auguste, Jared Hunt
 * @date    2022-03-02 21:32:48
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import { createStore, combineReducers } from 'redux'; //create a root reducer to combine multiple reducers into a single one
import { Provider } from 'react-redux'; //Provider app is wrapped around our application to, well, provide something
import productsReducer from './store/reducers/products';
import CafeNavigator from './navigation/CafeNavigator';
// import { createDrawerNavigator } from '@react-navigation/drawer';



import Home from './screens/Home';
import AccountRegistration from './screens/AccountRegistration';
import IndividualPastOrders from './components/IndividualPastOrders';
import colors from './constants/colors';
import Header from './components/Header';
import Login from './screens/Login';
import AccountInfo from './screens/AccountInformation';
import Menu from './screens/Menu';
import Checkout from './screens/Checkout';


const rootReducer = combineReducers({
  products: productsReducer
})

const store = createStore(rootReducer) //Takes rootReducer as a single argument


const Stack = createNativeStackNavigator();

export default function App() {
  const [showOrder, setShowOrder] = useState(false);

  /**
   * Move to 'list_of_past_orders
   */
  const closeButtonHandler = () => {
    setShowOrder(false);
  }

  return (

    <Provider store={store}>
      <CafeNavigator />
    </Provider>
  );

  
<View style={styles.screen}>
      {/** screens are commented out, to test other screens */}
      {/** <Header />*/}
      {/* <Home /> */}
      {/* <AccountRegistration /> */}
      {/**
       * uses user-created 'visible' prop to hide modal
       * uses user-created 'onClose' prop to pass function to external js file
       */}
      <IndividualPastOrders visible={showOrder} onClose={closeButtonHandler} />
      {/**
       * Move to 'list_of_past_orders
       */}
      <View style={{ marginTop: 200 }}>
        <Button title='Press for Order Details' onPress={() => setShowOrder(true)} />
      </View>
    </View>
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary
  }
});

/* <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Menu" component={Menu} />
          <Drawer.Screen name="Check out" component={Checkout} />
        </Drawer.Navigator>
      </NavigationContainer> */ //DO NOT REMOVE -- Testing navigation drawer */}