/**
 * Header:
 * Customizes top area of screen
 * @authors Mo Auguste
 * @date    2022-03-05 22:08:51
 * @version 1.0.0
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}></View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 36,
        backgroundColor: colors.header,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Header;
