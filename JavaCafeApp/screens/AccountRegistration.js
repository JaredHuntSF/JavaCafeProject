/**
 * AccountRegistration:
 * Takes input from user, validates user input, imports to db
 * @authors Mo Auguste
 * @date    2022-03-03 23:40:19
 * @version 1.0.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Alert
} from 'react-native';
import { useDispatch } from 'react-redux';

import * as customerActions from '../store/actions/customers';
import * as authActions from '../store/actions/auth';
import colors from '../constants/colors';
import size from '../constants/size';


const AccountRegistration = props => {

    /**
     * used for retrieving user input
     */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [phone, setPhone] = useState('');

    /**
     * used for error messages for user input
     */
    const [nameError, setNameError] = useState(' ');
    const [emailError, setEmailError] = useState(' ');
    const [passwordError, setPasswordError] = useState(' ');
    const [phoneError, setPhoneError] = useState(' ');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    /**
     * 
     * getting user input
     */
    const nameHandler = input => {
        var regex = /^[a-z ,.'-]+$/i;

        setName(input);

        if (name.match(regex)) {
            setNameError(' ');
        } else {
            setNameError('Please enter valid name.');
        }
    };

    const emailHandler = input => {
        var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        setEmail(input);

        if (regex.test(input)) {                    //built-in function to check regex
            setEmailError(' ');

        } else {
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
            setPhoneError(' ');
        } else {
            setPhoneError('Not a valid number.');
        }
    };

    /**
     * submitting user input
     */
    useEffect(() => {
        if (error) {
            Alert.alert('There was a problem', error, [{ text: 'OK' }]);
        }
    }, [error]);
    const submitHandler = async () => {
        if (name.length == 0) {
            Alert.alert(
                'Missing Name', 'Please enter a name.',
                [{
                    text: "OK"
                }]
            )
        } else if (email.length == 0) {
            Alert.alert(
                'Missing Email', 'Please enter an email.',
                [{
                    text: "OK"
                }]
            )
        } else if (password.length == 0) {
            Alert.alert(
                'Missing Password', 'Please enter a password.',
                [{
                    text: "OK"
                }]
            )
        } else if (passwordCheck.length == 0) {
            Alert.alert(
                'Password Verificaiton', 'Please enter password again.',
                [{
                    text: "OK"
                }]
            )
        } else if (phone.length == 0) {
            Alert.alert(
                'Missing Number', 'Please enter a phone number.',
                [{
                    text: "OK"
                }]
            )
        } else {
            //Refactor: SUBMIT DATA TO DB
            try {
                await dispatch(
                    authActions.signup(
                        name,
                        email,
                        password,
                        phone
                    )
                )
                props.navigation.navigate('Login')
            }
            catch (err) {
                setError(err.message);
            }
            // props.navigation.navigate('Login')
        }
    };
    /**
     * runs the code on the current render; not one behind like with passwordCheckHandler
     */
    useEffect(() => {
        if (password.length == 0 || passwordCheck.length == 0) {

        } else if (passwordCheck === password) {
            setPasswordError(' ');
        } else {
            setPasswordError('Does not match.');
        }
    });



    return (
        <TouchableWithoutFeedback navigation={props.navigation} onPress={() => {
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
                            placeholderTextColor={colors.secondary}
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
                            placeholderTextColor={colors.secondary}
                            textContentType="emailAddress"
                            blurOnSubmit={true}
                            maxLength={50}
                            keyboardType="email-address"
                            onChangeText={emailHandler}
                            value={email} />
                        <Text style={styles.subHeader}>Password</Text>
                        <TextInput style={styles.input}
                            placeholder="Enter a password"
                            placeholderTextColor={colors.secondary}
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
                            placeholderTextColor={colors.secondary}
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
                            placeholder="(XXX) XXX - XXXX"
                            placeholderTextColor={colors.secondary}
                            textContentType="telephoneNumber"
                            blurOnSubmit={true}
                            maxLength={10}
                            keyboardType="numeric"
                            onChangeText={phoneHandler}
                            value={phone} />
                        <View style={styles.button} >
                            {/* Making onPress direct to login screen as placeholder for application, onPress={submitHandler} */}
                            {/* onPress={() => {
                            props.navigation.navigate({ routeName: 'Login' }) }}*/}
                            <Button
                                title="Sign Up"
                                color={colors.assessory}
                                onPress={submitHandler}
                            />
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
        backgroundColor: colors.primary
    },
    header: {
        marginVertical: 10,
        fontSize: 30,
        color: colors.text,
    },
    body: {
        marginTop: 25
    },
    subHeader: {
        fontSize: 22,
        color: colors.header
    },
    input: {
        color: colors.text,
        marginVertical: 3,
        fontSize: size.paragraphFontSize,
        height: 50,
        borderBottomColor: colors.secondary,
        width: 300,
        borderWidth: 1,
        backgroundColor: colors.primary,
        marginBottom: 10
    },
    button: {
        width: 80,
        color: colors.assessory,
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
