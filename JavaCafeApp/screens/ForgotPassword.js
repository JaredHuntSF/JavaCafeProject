/**
 * Login: a place where user/employee can log into the Java Cafe App 
 * @authors Teddy Grzywa
 * @version 1.0.0
 */


 import React from 'react';
 import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
 import colors from '../constants/colors';
 import { useState } from 'react';
 
 
 
 
 const ForgotPassword = props => {
     return(
         <View style={styles.container} navigation={props.navigation}>
 
             <View>
                 <Text style={styles.title}>Java Café</Text>
             </View>

             <View>
                 <Text style={styles.email}>Please enter your account email</Text>
             </View>
 
             <View style={styles.body}>
                 <View style={styles.loginelement}>
                 <Text style={styles.body}>Email</Text>        
                 <TextInput style={styles.textinput}
                     placeholder="Enter your email address" />
                 </View>
 
 
                 <View>
                     <Button color='#FF850F' title="Send Reset Email" onPress={() => {props.navigation.navigate({ routeName: 'Login' })}} />
                 </View>
 
             </View>     
         </View>
     );
 };
 
 
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         alignItems: 'center',
         backgroundColor: colors.primary,
         width: '100%'
     },
     title: {
         fontSize: 48,
         fontWeight: "bold",
         color: '#ffffff',
         marginVertical: 50,
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
         marginBottom: 40
     },
     interactabletext: {
         marginVertical: 15
     },
     email: {
        color: colors.header,
        marginBottom: 20
    }
 
 
 
 });
 
 export default ForgotPassword;