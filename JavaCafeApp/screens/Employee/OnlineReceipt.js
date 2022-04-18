/**
  * OnlineReceipt: Expands an order: detailing order number, food and drink prices and amounts, the subtotal,
  * the tax, and the total
  * Also provides options for employees to cancel order or take employee to the fufill order screen page
  * there is also a button that provides a way to notify the customer of issues with the order such as an item
  * not being in stock
  * @authors Teddy Grzywa
  * @version 1.0.0
  */

 import React from 'react';
 import { StyleSheet, Text, View, } from 'react-native';
 import { Alert, Button } from 'react-native-web';
 import { FlatList } from 'react-navigation';
 import CUSTOMER_ORDERS from '../../data/orders-dummy-data';
 import colors from '../../constants/colors';



 const OnlineReceipt = props => {

    const [notify,setNotify] = useState('');

    function notifyHandler(notify) {
        setNotify(notify);
    }

    function submitNotifyHandler () {
        const notifyInput = ('');
 
        if(isNaN(notifyInput) ) {
            Alert.alert('Invalid Input', 'Enter a valid message for the customer.',
            [{text:'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
    }

    function cancleOrder() {
        renderOrderItem = ('');
        Alert.alert('Customer Alert', 'The order has been canceled')        
    }

    const renderOrderItem = itemData=> {
        return(
            <View style={styles.orderItem}>
                <Text style={styles.orderItemText}>{itemData.item}</Text>
                <Text style={styles.orderItemText}>${props.amount.toFixed(2)}</Text>
            </View>
        );
    }
    const orderId = props.navigation.getParam('orderId');
    const selectedOrder = CUSTOMER_ORDERS.find(order => order.id === orderId);

    
    return (
         <View style={styles.container}>
             
            <Text style={styles.header}>Order# {orderId}</Text>
             
             <View>
                 
                <FlatList //lists order item names and prices
                    style={styles.bodyText}
                    renderItem={renderOrderItem}
                />

                <FlatList
                //subtotal
                //tax
                //total
                />
            </View>

            <View style={styles.readyButtonContainer}>
                <Button
                title='Cancel Order'
                style={styles.button}
                color={'#FF850F'}
                onPress={() => {
                    ({ routeName: 'FulfillOrderScreen' })
                }}/>
                <Button
                title='Fullfil Order Screen'
                style={styles.button}
                color={'#FF850F'}
                onPress={() => {
                    this.cancleOrder(); 
                 }}                                 
                />
            </View>

            
            <View style={styles.inputText}>
                <TextInputEnter
                placeholder="Enter text here to notify
                customer that an item is not currently
                available, then click the button below"
                placeholderTextColor={'#fff'}
                style={styles.inputText}
                keyboardType=""
                maxLength={280}
                onChangeText={notifyHandler}
                value={notify}
                //unsure where/how this should get sent
                />
            </View>
         </View>
     );
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: colors.primary
    },
    header: {
        margin: 15,
        padding: 30,
        fontSize: 36,
        color: colors.text,
        fontWeight: "bold",
    },
    body: {
     margin: 4,
     padding: 15,
     width: '90%',
     flexDirection: 'column',
     //alignItems: 'center',
     justifyContent: 'flex-start'
    },
    section: {
        margin: 3,
        padding: 10,
    },
    bodyText: {
        fontSize: 14,
        flexDirection: 'column',
        padding: 5,
        color: colors.header,
        
    },
    inputText: { 
        color: colors.text,
        marginRight: 10,
        padding: 10,
        fontSize: 14,
        flexDirection: 'row',   
    },
    button: {
        color: colors.secondary,
        width: '30%'
    },
    readyButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    }
 })
 export default OnlineReceipt;