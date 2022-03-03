/**
 * Card component: Encpasulates other elements, portraying a floating card look
 * @authors Mo Auguste
 * @date    2022-03-02 21:45:01
 * @version 1.0.0
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../constants/colors';

/**
 * applies local styles, external styles and is capable to wrap around other elements
 */
const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.secondary,
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 10,
        borderRadius: 10,
        width: 350
    }
});

export default Card;
