/**
 * Orders:
 * Employee-Facing screen that displays all customer orders
 * @authors Mo Auguste
 * @date    2022-03-17 00:00:21
 * @version 1.0.0
 */

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CUSTOMER_ORDERS from '../../data/orders-dummy-data';
import colors from '../../constants/colors';
import OrderListItem from '../../components/OrderListItem';

const orderListItemSeparator = () => {
    return (
        <View style={styles.separator}></View>
    )
};

const Orders = props => {

    const renderListItem = itemData => {
        return (
            <OrderListItem
                navigation={props.navigation}
                style={styles.listItems}
                orderId={itemData.item.id}
                customerFirstName={itemData.item.customerFirstName}
                customerLastName={itemData.item.customerLastName}
            />
        )
    }
    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.flatlist}
                data={CUSTOMER_ORDERS}
                renderItem={renderListItem}
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
