/**
 * Login: a place where user/employee can log into the Java Cafe App 
 * @authors Teddy Grzywa
 * @version 1.0.0
 */


import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import colors from '../constants/colors';
import { useState } from 'react';

const testAlert = () => {
    Alert.alert('Wrong input!', 'Please check the errors in the form.', [{text: 'Okay'}] )
};



const Login = props => {
    return(
        <View style={styles.container} navigation={props.navigation}>

            <View>
                <Text style={styles.title}>Java Café</Text>
            </View>

            <View style={styles.body}>
                <View>
                <Text style={styles.body}>Email</Text>        
                <TextInput style={styles.textinput}
                    placeholder="Enter your email address" />
                </View>


                <View>
                    <Text style={styles.body}>Password</Text>
                    <TextInput  style={styles.textinput}
                    secureTextEntry={true} placeholder="Enter your password"/>
                </View>

                <View>
                <Text style={styles.body}>Don't have an account? Register Now</Text>    
                </View> 
            
            
                <View>
                    <Button color='#FF850F' title="Log In" onPress={() => {props.navigation.navigate({ routeName: 'Home' })}} />
                </View>

                <View>
                    <Text style={styles.body}>Forgot your password?</Text>
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
        backgroundColor: colors.primary
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
        color: '#ffffff'
    },
    body: {
        paddingTop: 10,
        paddingBottom: 10,
        color: colors.text
    },
    btn: {
        color: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 5
    },
    textinput: {
        color: 'white'
    }



});

export default Login;