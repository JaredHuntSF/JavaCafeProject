/**
 * AccountRegistration:
 * Takes input from user, validates user input, imports to db
 * @authors Mo Auguste
 * @date    2022-03-03 23:40:19
 * @version 1.0.0
 */

import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { clearErrors } from 'react-native/Libraries/LogBox/Data/LogBoxData';

import colors from '../constants/colors';
import size from '../constants/size';

const AccountRegistration = () => {

    return (
        <View style={styles.screen}>
            <Text style={styles.header}>Account Registration</Text>
            <View style={styles.body}>
                <Text style={styles.subHeader}>Name</Text>
                <TextInput style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor={colors.text}
                    textContentType="name"
                    blurOnSubmit={true}
                    maxLength={20} />
                <Text style={styles.subHeader}>Email</Text>
                <TextInput style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={colors.text}
                    textContentType="emailAddress"
                    blurOnSubmit={true}
                    maxLength={50}
                    keyboardType="email-address" />
                <Text style={styles.subHeader}>Password</Text>
                <TextInput style={styles.input}
                    placeholder="Enter a password"
                    placeholderTextColor={colors.text}
                    textContentType="password"
                    blurOnSubmit={true}
                    maxLength={20} />
                <Text style={styles.subHeader}>Retype Password</Text>
                <TextInput style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor={colors.text}
                    textContentType="password"
                    blurOnSubmit={true}
                    maxLength={20} />
                <Text style={styles.subHeader}>Phone Number</Text>
                <TextInput style={styles.input}
                    placeholder="+1 (XXX) XXX - XXXX"
                    placeholderTextColor={colors.text}
                    textContentType="telephoneNumber"
                    blurOnSubmit={true}
                    maxLength={10}
                    keyboardType="numeric" />
                <View style={styles.button}>
                    <Button title="Sign Up" color={colors.secondary} />
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15
    },
    header: {
        fontSize: size.headingFontSize,
        color: colors.text
    },
    body: {
        marginTop: 25
    },
    subHeader: {
        fontSize: size.subHeadingFontSize,
        color: colors.text
    },
    input: {
        color: colors.text,
        marginVertical: 5,
        fontSize: size.paragraphFontSize,
        height: 50,
        borderBottomColor: colors.text,
        width: 350,
        borderWidth: 1
    },
    button: {
        width: 80,
        color: colors.secondary,
        alignSelf: 'center',
        marginTop: 25
    }
});

export default AccountRegistration;
