/**
 * Fulfill Order Screen
 * @authors Mo Auguste
 * @date    2022-03-17 23:23:48
 * @version 1.0.0
 */

import React from 'react';
import { View, Text, Button, FlatList, ScrollView, StyleSheet } from 'react-native';

import Card from '../../components/Card';
import CUSTOMER_ORDERS from '../../data/orders-dummy-data';
import colors from '../../constants/colors';
import size from '../../constants/size';

const FulfillOrderScreen = props => {

    const renderOrderItem = itemData => {
        return (
            <Card style={styles.orderItem}>
                <Text style={styles.orderItemText}>{itemData.item}</Text>
                {/*REFACTOR: Get QTY from db */}
                <Text style={styles.orderItemText}>QTY</Text>
            </Card>);
    }
    const orderId = props.navigation.getParam('orderId');
    const selectedOrder = CUSTOMER_ORDERS.find(order => order.id === orderId);

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Order# {orderId}</Text>
            </View>
            <FlatList
                style={styles.flatlist}
                data={selectedOrder.saleItems}
                keyExtractor={(item, index) => item}
                renderItem={renderOrderItem}
            />
            <ScrollView>
                <Text style={styles.subheaderText}>Delay?</Text>
                <View style={styles.delayButtonContainer}>
                    <View style={styles.button}><Button color={colors.secondary} title='Notify Customer' /></View>
                </View>
                <Text style={styles.subheaderText}>Ready?</Text>
                <View style={styles.readyButtonContainer}>
                    <View style={styles.button}><Button color={colors.secondary} title='5 MIN' /></View>
                    <View style={styles.button}><Button color={colors.secondary} title='10 MIN' /></View>
                    <View style={styles.button}><Button color={colors.secondary} title='15 MIN' /></View>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.primary,
        flex: 1,
        padding: 10
    },
    header: {
        alignItems: 'center',
        marginVertical: 20
    },
    headerText: {
        color: colors.text,
        fontSize: size.headingFontSize
    },
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    orderItemText: {
        color: colors.text
    },
    subheaderText: {
        color: colors.text,
        fontSize: size.subheaderText,
        fontWeight: 'bold',
        marginTop: 50
    },
    button: {
        color: colors.secondary,
        width: '30%'
    },
    delayButtonContainer: {
        marginVertical: 20,
        alignItems: 'center'
    },
    readyButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    }
});

export default FulfillOrderScreen;
