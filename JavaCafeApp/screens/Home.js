/**
 * Home Component: Returns all home screen elements to main
 * Note to team: Needed to install package for icons
 * @authors Mo Auguste
 * @date    2022-03-02 21:31:34
 * @version 1.0.0
 */
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";  //need to run npm install @expo/vector-icons to get this package

import TopNavigation from "../components/TopNavigtion";
import Card from '../components/Card';
import BottomNavigation from "../components/BottomNavigation";
import colors from "../constants/colors";
import textSize from "../constants/size";

const Home = () => {

    const currentUser = useRef("Mike" + "!"); //Refactor Code: get value from db

    const [greeting, setGreeting] = useState();

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

    /* Refactor Code: Find way to access device time
    const applyGreetingHandler = (timeOfDay) => {
        if (timeOfDay > 0 && timeOfDay <= 12) {
            setGreeting('Good Morning');
        } else if (timeOfDay > 12 && timeOfDay < 5) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
    };
    */

    return (
        <View style={styles.screen}>
            <TopNavigation />
            <Card style={styles.greetingContainer}>
                {/**Refactor Code: Insert greeting*/}
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
            <BottomNavigation />
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

    },
    receiptRecapTitle: {
        textAlign: "center",
        fontSize: textSize.subHeadingFontSize,
        color: colors.text
    },
    receiptRecapContainer: {
        marginTop: 50,
        maxHeight: 200
    },
    listItems: {
        fontSize: textSize.paragraphFontSize,
        color: colors.text,
        marginVertical: 2
    },
    recentOrdersContainer: {
        marginTop: 20
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
