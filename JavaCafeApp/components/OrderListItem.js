import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const OrderListItem = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.listItem}>
                <Text style={styles.listContent}>Order# {props.orderId}</Text>
                <Text style={styles.listContent}>{props.customerFirstName} {props.customerLastName}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listContent: {
        color: colors.text,
        marginVertical: 5
    },
    separator: {
        backgroundColor: colors.secondary
    }
});

export default OrderListItem;
