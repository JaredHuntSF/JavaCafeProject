/**
 * Checkout: The customer can submit their order on this screen.
 * @authors Blake Ardizzone
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Platform, TouchableOpacity, Switch } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import BottomNavigation from '../components/BottomNavigation';

import Colors from '../constants/colors';
import CartItem from '../components/CartItem';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../constants/colors';

const Checkout = props => {
const cartTotalAmount = useSelector(state => state.cart.totalAmount);
const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
    transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
    });
    }
    return transformedCartItems;
});

const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
return (
<View style={styles.screen}>
        
        <View style={styles.contentHolder}>
            
            <View style={styles.body}>
            <FlatList style={styles.contentHolder}
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
            </View>

            <View style={styles.body}>
                    <Text style={{color: 'white'}} >Order Now</Text>        
                    <Switch 
                    trackColor={{ false: "#767577", true: Colors.assessory }}
                    thumbColor={isEnabled ? Colors.text : Colors.header}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled} 
                    />
                </View>
            <View style={styles.body}>
                <Text style={{color: 'white'}} >Order Later</Text>        
                <Switch 
                trackColor={{ false: "#767577", true: Colors.assessory }}
                thumbColor={isEnabled ? Colors.text : Colors.header}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} 
                />
            </View>
            <View style={styles.body}>
                    <Text style={{color: 'white'}} >Apply Points</Text>        
                    <Switch 
                    trackColor={{ false: "#767577", true: Colors.assessory }}
                    thumbColor={isEnabled ? Colors.text : Colors.header}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled} 
                    />
            </View>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                Subtotal:{' '}
                    <Text style={styles.text}>${//tips to be implemented
                    }
                    </Text>
                </Text>
                <Text style={styles.summaryText}>
                Redeem:{' '}
                    <Text style={styles.text}>-{//redeem to be implemented
                    }
                    </Text>
                </Text>
                <Text style={styles.summaryText}>
                Tax:{' '}
                    <Text style={styles.text}>${//tax to be implemented
                    }
                    </Text>
                </Text>
                <Text style={styles.summaryText}>
                Tip:{' '}
                    <Text style={styles.text}>${//tips to be implemented
                    }
                    </Text>
                </Text>
                <Text style={styles.summaryText}>
                
                    <Text style={styles.text}>Total: ${cartTotalAmount.toFixed(2)
                    }
                    </Text>
                </Text>
            </View>

            <View style={styles.submitOrder}>
                    <TouchableOpacity
                        style={styles.button}
                    //disabled={cartItems.length === 0}
                    >
                        <Text style={styles.buttonText}>Submit Order</Text>
                        </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.bottomBar}>
            <BottomNavigation navigation={props.navigation} />
        </View>


    
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
    headerTitle: 'Order',
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
    //margin: 20, //Caused formatting issues
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
},
screen: {
    //margin: 20, //Caused formatting issues
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
},
body: {
    margin: 4,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
},
summary: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
    //margin: 240,
    padding: 10,
    width: '30%',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'black',
},
text: {
    color: 'white',
},
summaryText: {
    fontSize: 18,
    color: 'white',
},
amount: {
    color: Colors.primary
},
submitOrder: {

    alignItems: 'center'
},
bottomBar: {
    height: 100
},
button: {
    backgroundColor: colors.assessory,
    justifyContent: 'center',
    padding: 10
},
buttonText: {
    color: colors.text
},
contentHolder: {
    flex: 1
}
});

export default Checkout;