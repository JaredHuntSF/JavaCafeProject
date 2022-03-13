/**
 * BottomNavigation:
 * Gives access to 'home', 'order', 'store location', and 'checkout' screens
 * @authors Mo Auguste
 * @date    2022-03-03 19:18:22
 * @version 1.0.0
 */

import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import size from '../constants/size';


const BottomNavigation = props => {
    return (

        <View style={{ ...styles.bottomNavigationContainer, ...props.style }}>
            <TouchableWithoutFeedback onPress={() => {
                props.navigation.navigate({ routeName: 'Home' });
            }}>
                <Ionicons style={styles.menuIcon} name='home'></Ionicons>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                props.navigation.navigate({ routeName: 'Menu' });
            }}>
                <Ionicons style={styles.menuIcon} name='cafe'></Ionicons>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                props.navigation.navigate({ routeName: 'StoreLocation' })
            }}>
                <Ionicons style={styles.menuIcon} name='location'></Ionicons>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                props.navigation.navigate({ routeName: 'Checkout' })
            }}>
                <Ionicons style={styles.menuIcon} name='cart'></Ionicons>
            </TouchableWithoutFeedback>
        </View>

    )
};

/**
 * Refactor Code: Find alternative to 'top';
 * This will not work for all screens
 */
const styles = StyleSheet.create({

    bottomNavigationContainer: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 5,
        //height: 100, //Commented this out, because this was causing problems
        //top: '40%', //Commented this out, because this was causing problems
        justifyContent: 'space-between',
        padding: 20
    },
    menuIcon: {
        color: colors.text,
        fontSize: size.menuItems,
        padding: 20

    }
});

export default BottomNavigation;
