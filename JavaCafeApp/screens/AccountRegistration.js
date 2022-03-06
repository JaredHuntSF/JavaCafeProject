/**
 * AccountRegistration:
 * Takes input from user, validates user input, imports to db
 * @authors Mo Auguste
 * @date    2022-03-03 23:40:19
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView
} from 'react-native';
import { useReducer } from 'react/cjs/react.production.min';

import colors from '../constants/colors';
import size from '../constants/size';


const AccountRegistration = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState(' ');
    const [emailError, setEmailError] = useState(' ');
    const [passwordError, setPasswordError] = useState(' ');
    const [phoneError, setPhoneError] = useState(' ');

    const nameHandler = input => {
        var regex = /^[a-z ,.'-]+$/i;

        setName(input);

        if (name.match(regex)) {
            //console.log('Matched' + name);
            setNameError(' ');
        } else {
            //console.log('Name does not match.');
            setNameError('Please enter valid name.');
        }
    };

    const emailHandler = input => {
        var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        setEmail(input);

        if (regex.test(input)) {                    //built-in function to check regex
            //console.log('Matched' + email);
            setEmailError(' ');

        } else {
            //console.log('Email does not match.');
            setEmailError('Please enter valid email.');
        }
    };

    const passwordHandler = input => {
        setPassword(input);
    };

    const passwordCheckHandler = input => {
        setPasswordCheck(input);
    };

    const phoneHandler = input => {
        var regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

        setPhone(input);

        if (regex.test(input)) {
            console.log('Matched' + phone);
            setPhoneError(' ');
        } else {
            //console.log('Phone does not match.');
            setPhoneError('Not a valid number.');
        }
        //setPhone(input.replace(/[^0-9]/g, ''));
    };

    /**
     * runs the code on the current render; not one behind as found with passwordCheckHandler
     */
    useEffect(() => {
        if (password.length == 0 || passwordCheck.length == 0) {

        } else if (passwordCheck === password) {
            //console.log('Password Matched');
            setPasswordError(' ');
        } else {
            setPasswordError('Does not match.');
        }
    });

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.header}>Account Registration</Text>
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.errorMessageContainer}>
                            <Text style={styles.subHeader}>Name</Text>
                            <Text style={styles.errorMessage}>{nameError}</Text>
                        </View>
                        <TextInput style={styles.input}
                            placeholder="Enter your name"
                            placeholderTextColor={colors.text}
                            textContentType="name"
                            blurOnSubmit={true}
                            maxLength={20}
                            onChangeText={nameHandler}
                            value={name} />
                        <View style={styles.errorMessageContainer}>
                            <Text style={styles.subHeader}>Email</Text>
                            <Text style={styles.errorMessage}>{emailError}</Text>
                        </View>
                        <TextInput style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor={colors.text}
                            textContentType="emailAddress"
                            blurOnSubmit={true}
                            maxLength={50}
                            keyboardType="email-address"
                            onChangeText={emailHandler}
                            value={email} />
                        <Text style={styles.subHeader}>Password</Text>
                        <TextInput style={styles.input}
                            placeholder="Enter a password"
                            placeholderTextColor={colors.text}
                            textContentType="password"
                            blurOnSubmit={true}
                            maxLength={20}
                            secureTextEntry={true}
                            onChangeText={passwordHandler}
                            value={password} />
                        <View style={styles.errorMessageContainer}>
                            <Text style={styles.subHeader}>Retype Password</Text>
                            <Text style={styles.errorMessage}>{passwordError}</Text>
                        </View>
                        <TextInput style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor={colors.text}
                            textContentType="password"
                            blurOnSubmit={true}
                            maxLength={20}
                            secureTextEntry={true}
                            onChangeText={passwordCheckHandler}
                            value={passwordCheck} />
                        <View style={styles.errorMessageContainer}>
                            <Text style={styles.subHeader}>Phone Number</Text>
                            <Text style={styles.errorMessage}>{phoneError}</Text>
                        </View>
                        <TextInput style={styles.input}
                            placeholder="+1 (XXX) XXX - XXXX"
                            placeholderTextColor={colors.text}
                            textContentType="telephoneNumber"
                            blurOnSubmit={true}
                            maxLength={10}
                            keyboardType="numeric"
                            onChangeText={phoneHandler}
                            value={phone} />
                        <View style={styles.button}>
                            <Button title="Sign Up" color={colors.secondary} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
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
        width: 300,
        borderWidth: 1
    },
    button: {
        width: 80,
        color: colors.secondary,
        alignSelf: 'center',
        marginTop: 25
    },
    errorMessageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    errorMessage: {
        color: colors.assessory,
        fontSize: size.smallPrintFontSize
    }
});

export default AccountRegistration;
