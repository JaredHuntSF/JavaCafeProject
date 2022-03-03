import React, { useRef } from "react";
import { View, Text, StyleSheet, Button, } from "react-native";



const Home = () => {

    const currentUser = useRef("Mike" + "!"); //need to refactor: get value from db

    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.greeting}>Good Morning, {currentUser.current}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    greeting: {
        textAlign: "center",
        fontSize: 18,
        marginVertical: 200
    }
});

export default Home;
