/**
 * Past Orders: The customer is able to see all their past orders in this screen
 * @authors Blake Ardizzone, Jared Hunt
 * @version 1.0.0
 */

 import React from 'react';
 import { FlatList, Text, Platform, StyleSheet, View } from 'react-native';
 import { useSelector } from 'react-redux';
 import UserOrder from '../components/UserOrder';
 import colors from '../constants/colors';
 
 const PastOrders = props => {
   const orders = useSelector(state => state.orders.orders);
 
   return (
    <FlatList style={styles.container}
    data={orders}
    keyExtractor={item => item.id}
    renderItem={itemData => (
      <UserOrder
        amount={itemData.item.totalAmount}
        date={itemData.item.readableDate}
        items={itemData.item.items}
      />
    )}
  />
   );
 };
 
 PastOrders.navigationOptions = navData => {
   return {
     headerTitle: 'Your Orders',};
 };

 const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
    },



})
 
 export default PastOrders;
 