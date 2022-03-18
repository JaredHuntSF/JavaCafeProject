/**
 * Orders:
 * Employee-Facing screen that displays all customer orders
 * @authors Mo Auguste
 * @date    2022-03-17 00:00:21
 * @version 1.0.0
 */

import React from 'react';
import { View, FlatList, Text, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native';

import TopNavigation from '../../components/TopNavigation';
import CUSTOMER_ORDERS from '../../data/orders-dummy-data';
import colors from '../../constants/colors';
import OrderListItem from '../../components/OrderListItem';

const orderListItemSeparator = () => {
    return (
        <View style={styles.separator}></View>
    )
};

const Orders = () => {
    return (
        <View style={styles.screen}>
            <TopNavigation />
            <FlatList style={styles.flatlist} data={CUSTOMER_ORDERS} renderItem={singleOrder =>
                <OrderListItem
                    style={styles.listItems}
                    orderId={singleOrder.item.id}
                    customerFirstName={singleOrder.item.customerFirstName}
                    customerLastName={singleOrder.item.customerLastName}
                    onPress={() => { }} />}
                ItemSeparatorComponent={orderListItemSeparator} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.primary
    },
    flatlist: {
        marginVertical: 30,
        padding: 20
    },
    separator: {
        backgroundColor: colors.secondary,
        height: 1,
        width: '100%'
    }
});

export default Orders;
