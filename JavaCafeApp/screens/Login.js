/**
 * Login: a place where user/employee can log into the Java Cafe App 
 * @authors Teddy Grzywa
 * @version 1.0.0
 */


import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';

const testAlert = () => {
    Alert.alert('Wrong input!', 'Please check the errors in the form.', [{ text: 'Okay' }])
};



const Login = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const dispatch = useDispatch();

    const loginHandler = async () => {
        setError(null);
        try {
            await dispatch(
                authActions.login(
                    email,
                    password,
                )
            )
            props.navigation.navigate('Home');
        } catch (err) {
            setError(err.message);
        }
        //props.navigation.navigate('Home')
        console.log(email);
        console.log(password);
    };

    const passwordHandler = input => {
        setPassword(input);
    };

    const emailHandler = input => {
        setEmail(input);
    };

    return (
        <View style={styles.container} navigation={props.navigation}>

            <View>
                <Text style={styles.title}>Java Café</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.loginelement}>
                    <Text style={styles.body}>Email</Text>
                    <TextInput style={styles.textinput}
                        placeholder="Enter your email address"
                        onChangeText={emailHandler}
                        value={email} />
                </View>


                <View style={styles.loginelement}>
                    <Text style={styles.body}>Password</Text>
                    <TextInput style={styles.textinput}
                        secureTextEntry={true}
                        placeholder="Enter your password"
                        onChangeText={passwordHandler}
                        value={password} />
                </View>

                <View style={styles.interactabletext}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate({ routeName: 'AccountRegistration' }) }}>
                        <Text style={styles.body}>Don't have an account? Register Now</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Button color='#FF850F' title="Log In" onPress={loginHandler} />
                </View>


                {/* <View>
                    <Button color='#FF850F' title="Log In" onPress={() => {props.navigation.navigate({ routeName: 'Home' })}} />
                </View> */}

                <View style={styles.interactabletext}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate({ routeName: 'ForgotPassword' }) }}>
                        <Text style={styles.body}>Forgot your password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        width: '100%'
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
        color: '#ffffff',
        marginBottom: 40
    },
    body: {
        paddingTop: 10,
        paddingBottom: 10,
        color: colors.header,
        width: '80%'
    },
    btn: {
        color: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 5
    },
    textinput: {
        color: 'white',

    },
    loginelement: {
        borderBottomColor: colors.secondary,
        borderWidth: 2,
        marginBottom: 20
    },
    interactabletext: {
        marginVertical: 15
    }



});

export default Login;