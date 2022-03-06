/**
 * BottomNavigation:
 * Gives access to 'home', 'order', 'store location', and 'checkout' screens
 * @authors Mo Auguste
 * @date    2022-03-03 19:18:22
 * @version 1.0.0
 */

import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import size from '../constants/size';


const BottomNavigation = () => {
    return (
        <View style={styles.bottomNavigationContainer}>
            <TouchableWithoutFeedback>
                <Ionicons style={styles.menuIcon} name='home-outline'></Ionicons>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Ionicons style={styles.menuIcon} name='cafe-outline'></Ionicons>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Ionicons style={styles.menuIcon} name='location-outline'></Ionicons>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Ionicons style={styles.menuIcon} name='cart-outline'></Ionicons>
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
        height: 100,
        top: '40%',
        justifyContent: 'space-between'
    },
    menuIcon: {
        color: colors.text,
        fontSize: size.menuItems
    }
});

export default BottomNavigation;
