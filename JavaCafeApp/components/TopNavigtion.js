/**
 * Top Navigation:
 * Provides access to left top menu items and account settings
 * @authors Mo Auguste
 * @date    2022-03-03 17:43:49
 * @version 1.0.0
 */

import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import size from '../constants/size';

const TopNavigation = () => {
    return (
        <View style={styles.topNavigationContainer}>
            <TouchableWithoutFeedback>
                <Ionicons style={styles.menuIcon} name='menu-sharp'></Ionicons>
            </TouchableWithoutFeedback>
            <View style={styles.accountIconContainer}>
                <TouchableWithoutFeedback>
                    <Ionicons style={styles.accountIcon} name='person-sharp'></Ionicons>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
};
/**
 * Refactor Code: want to determine how to use flex appropriately, in order to
 * avoid using margin
 */
const styles = StyleSheet.create({
    topNavigationContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    menuIcon: {
        color: colors.secondary,
        fontSize: size.menuItems
    },
    accountIconContainer: {
        marginLeft: 260
    },
    accountIcon: {
        color: colors.secondary,
        fontSize: size.menuItems
    }
})

export default TopNavigation;
