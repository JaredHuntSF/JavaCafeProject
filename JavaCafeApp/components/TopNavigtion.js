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

const TopNavigation = () => {
    <View style={styles.topNavigationContainer}>
        <TouchableWithoutFeedback>
            <Ionicons name='menu-sharp'></Ionicons>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
            <Ionicons name='person-sharp'></Ionicons>
        </TouchableWithoutFeedback>
    </View>
}

const styles = StyleSheet.create({
    topNavigationContainer: {
        flexDirection: 'row'
    }
})

export default TopNavigation;
