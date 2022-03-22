import React from 'react';
import {
View,
Text,
StyleSheet,
TouchableOpacity,
Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const OrderItem = props => {
return (
<View style={styles.cartItem}>
    <View style={styles.itemData}>
    <Text style={styles.quantity}>{props.quantity} </Text>
    <Text style={styles.mainText}>{props.title}</Text>
    </View>
    <View style={styles.itemData}>
    <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
    </View>
</View>
);
};

const styles = StyleSheet.create({
cartItem: {
    padding: 10,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: colors.header
    
},
    itemData: {
    flexDirection: 'row',
    alignItems: 'center'
},
    quantity: {
    color: '#888',
    fontSize: 16
},
    mainText: {
    fontSize: 16,
    color: colors.text
},
    deleteButton: {
    marginLeft: 20
}
});

export default OrderItem;