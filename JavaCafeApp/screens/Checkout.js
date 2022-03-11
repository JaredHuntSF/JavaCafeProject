/**
 * Checkout: The customer can submit their order on this screen.
 * @authors Blake Ardizzone
 * @version 1.0.0
 */

import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Colors from '../constants/colors';
import CartItem from '../components/CartItem';

const Checkout = props => {
const cartItems = '';
// const cartTotalAmount = useSelector(state => state.cart.totalAmount);
// const cartItems = useSelector(state => {
//     const transformedCartItems = [];
//     for (const key in state.cart.items) {
//     transformedCartItems.push({
//         productId: key,
//         productTitle: state.cart.items[key].productTitle,
//         productPrice: state.cart.items[key].productPrice,
//         quantity: state.cart.items[key].quantity,
//         sum: state.cart.items[key].sum
//     });
//     }
//     return transformedCartItems;
// });

return (
<View style={styles.screen}>
    
    <Text>TEST</Text>

    <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData => (
        <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            onRemove={() => {}}
        />
        )}
        
    />

<Text>TEST TEST</Text>

    <View style={styles.summary}>
        <Text style={styles.summaryText}>
        Total:{' '}
        <Text style={styles.amount}>${//cartTotalAmount.toFixed(2)
        }
        </Text>
        </Text>
        <Button
        color={Colors.assessory}
        title="Submit order"
        //          disabled={cartItems.length === 0}
        />
    </View>

    <Text>TEST TEST</Text>
</View>
);
};

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
// return (
// <Drawer.Navigator>
//     <Drawer.Screen name="Feed" component={Feed} />
//     <Drawer.Screen name="Article" component={Article} />
// </Drawer.Navigator>
// );
// }

Checkout.navigationOptions = navData => {

    return {
    headerTitle: 'Your Cart',
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='cart' iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} />
    </HeaderButtons>,
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} > 
    <Item 
    title='Menu' 
    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} 
    onPress={() => {
        navData.navigation.navigate('Menu');
    }} />
    </HeaderButtons>
    }
    
};

const styles = StyleSheet.create({
screen: {
    margin: 20
},
summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
},
summaryText: {
    fontSize: 18
},
amount: {
    color: Colors.primary
}
});

export default Checkout;