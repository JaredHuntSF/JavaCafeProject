/**
 * AccountRegistration:
 * Takes input from user, validates user input, imports to db
 * @authors Mo Auguste
 * @date    2022-03-03 23:40:19
 * @version 1.0.0
 */

import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

import colors from '../constants/colors';
import size from '../constants/size';

const AccountRegistration = () => {

    return (
        <View style={styles.screen}>
            <Text style={styles.header}>Account Registration</Text>
            <TextInput style={styles.input} placeholder="Enter your name"></TextInput>
            <Text style={styles.subHeader}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email"></TextInput>
            <Text style={styles.subHeader}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter a password"></TextInput>
            <Text style={styles.subHeader}>Retype Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password"></TextInput>
            <Text style={styles.subHeader}>Phone Number</Text>
            <TextInput style={styles.input}
                placeholder="+1 (US) (X X X) XXX - XXXX"
                underlineColorAndroid={colors.text}
                placeholderTextColor={colors.text}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        fontSize: size.headingFontSize,
        color: colors.text
    },
    subHeader: {
        fontSize: size.subHeadingFontSize,
        color: colors.text
    },
    input: {
        color: colors.text,
    }
});

export default AccountRegistration;
