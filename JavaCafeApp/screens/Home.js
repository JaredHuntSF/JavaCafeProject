/**
 * Home Component: Returns all home screen elements to main
 * @authors Mo Auguste
 * @date    2022-03-02 21:31:34
 * @version 1.0.0
 */
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";  //need to run npm install @expo/vector-icons to get this package

import colors from "../constants/colors";
import Card from '../components/Card';
import textSize from "../constants/textSize";

const Home = () => {

    const currentUser = useRef("Mike" + "!"); //need to refactor: get value from db
    /**
     * doesn't allow for rendering all items within flatlist;
     * will load data from db anyway
     */
    const [pastOrders, setPastOrders] = useState([{
        key: 'Order# 66 - 01/05/2022', value: 'Order# 66 - 01/05/2022',
        key: 'Order# 65 - 01/04/2022', value: 'Order# 65 - 01/04/2022',
        key: 'Order# 64 - 01/03/2022', value: 'Order# 64 - 01/03/2022',
        key: 'Order# 63 - 01/02/2022', value: 'Order# 63 - 01/02/2022',
        key: 'Order# 62 - 01/01/2022', value: 'Order# 62 - 01/01/2022'
    }]);

    /* adds past order */
    const addPastOrdersHandler = () => {
        setPastOrders(currentOrders => [...currentOrders, newOrder]);
    };

    return (
        <View style={styles.screen}>
            <Card style={styles.greetingContainer}>
                <Text style={styles.greeting}>Good Morning, {currentUser.current}</Text>
            </Card>
            <Card style={styles.receiptRecapContainer}>
                <Text style={styles.receiptRecapTitle}>Online Receipts</Text>

                {/**
                 * Provides scrollview-like capabilities; 
                 * renderItem takes function that is performed on each item data
                 */}
                <FlatList data={pastOrders} renderItem={orderItem => <Text style={styles.listItems}>{orderItem.item.value}</Text>} />
            </Card>
            <Card style={styles.recentOrdersContainer}>
                <Text style={styles.recentOrdersTitle}>Recent Orders</Text>

                <View style={styles.recentOrdersScroll}>
                    {/**
                     * All wired for touch events
                     */}
                    <TouchableWithoutFeedback>
                        <Ionicons style={styles.backButton} name="arrow-back-circle-sharp"></Ionicons>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image style={styles.image} source={require('../assets/cold_brew.jpg')}></Image>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image style={styles.image} source={require('../assets/cold_brew.jpg')}></Image>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Ionicons style={styles.forwardButton} name="arrow-forward-circle-sharp"></Ionicons>
                    </TouchableWithoutFeedback>

                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    greeting: {
        textAlign: "center",
        fontSize: textSize.headingFontSize,
        color: '#fff'
    },
    greetingContainer: {
        marginVertical: 130,
    },
    receiptRecapTitle: {
        textAlign: "center",
        fontSize: textSize.subHeadingFontSize,
        color: colors.text
    },
    receiptRecapContainer: {
        marginVertical: -100,
        maxHeight: 200
    },
    pastOrdersContainer: {
        marginVertical: 10
    },
    listItems: {
        fontSize: textSize.paragraphFontSize,
        color: colors.text,
        marginVertical: 2
    },
    recentOrdersContainer: {
        marginVertical: 130,
    },
    recentOrdersTitle: {
        fontSize: textSize.subHeadingFontSize,
        color: colors.text,
        textAlign: 'center'
    },
    recentOrdersScroll: {
        marginVertical: 15,
        flexDirection: 'row',
    },
    backButton: {
        fontSize: 50,

        marginVertical: 15
    },
    forwardButton: {
        fontSize: 50,
        marginLeft: 5,
        marginVertical: 15
    },
    image: {
        width: 80,
        height: 80,
        marginLeft: 15
    }
});

export default Home;
