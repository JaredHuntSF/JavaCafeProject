/**
 * Not a screen but just a modal for past the orders screen
 * Blake is working on
 * @authors Mo Auguste
 * @date    2022-03-06 22:24:57
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { View, Modal, StyleSheet, FlatList, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../constants/colors';
import size from '../constants/size';

const IndividualPastOrders = props => {

    //Refactor: Get from db
    const [orderNumber, setOrderNumber] = useState('57');
    const [selectedOrder, setSelectedOrder] = useState([{
        key: 'Large Coffee', value: 'Large Coffee',
        key: 'Cheese & Fruit Box', value: 'Cheese & Fruit Box',
        key: 'Ham & Swiss Sandwich', value: 'Ham & Swiss Sandwich',
        key: 'Kettle Chips', value: 'Kettle Chips'
    }]);
    const [subtotal, setSubtotal] = useState('X.XX');
    const [tax, setTax] = useState('X.XX');
    const [total, setTotal] = useState('X.XX');

    //Refactor: Get from db
    const addToArrayHandler = () => {
        setSelectedOrder();
    };
    const fetchSubtotalHandler = () => {
        setSubtotal();
    }
    const fetchTax = () => {
        setTax();
    }
    const fetchTotal = () => {
        setTotal();
    }

    return (
        <Modal visible={props.visible}>
            <View style={styles.screen}>
                <View style={styles.row}>
                    <Text style={styles.header}>Order# {orderNumber}</Text>
                    <TouchableWithoutFeedback onPress={props.onClose}>
                        <Ionicons style={styles.closeIcon} name='close-outline' />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.orderItemsContainer}>
                    <FlatList data={selectedOrder} renderItem={orderItem => <Text style={styles.listItems}>{orderItem.item.value}</Text>} />
                </View>
                <View style={styles.orderItemsContainer}>
                    <View style={styles.row}>
                        <Text style={styles.listItems}>Subtotal</Text>
                        <Text style={styles.listItems}>{subtotal}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.listItems}>Tax</Text>
                        <Text style={styles.listItems}>{tax}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.listItems}>Total</Text>
                        <Text style={styles.listItems}>{total}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 20,
        padding: 20,
        backgroundColor: colors.primary
    },
    header: {
        fontSize: size.headingFontSize,
        color: colors.text
    },
    orderItemsContainer: {
        marginTop: 20
    },
    listItems: {
        color: colors.text
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    closeIcon: {
        color: colors.text,
        fontSize: size.menuItems
    }
});

export default IndividualPastOrders;
