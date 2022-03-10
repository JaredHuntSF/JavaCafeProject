/**
 * Login: a place where user/employee can log into the Java Cafe App 
 * @authors Teddy Grzywa
 * @version 1.0.0
 */


 import React from 'react';
 import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
 import { Colors } from 'react-native/Libraries/NewAppScreen';
 import { useState } from 'react';
 
 
 
 
 
 const Login = props => {
     return(
         <View style={styles.container}>
 
             <View>
                 <Text style={styles.title}>Java Café</Text>
             </View>
 
             <View style={styles.body}>
                 <View>
                  <Text style={styles.body}>Email</Text>        
                  <TextInput 
                     placeholder="Enter your email address" />
                 </View>
 
 
                 <View>
                     <Text style={styles.body}>Password</Text>
                     <TextInput  
                     secureTextEntry={true} placeholder="Enter your password"/>
                 </View>
 
                 <View>
                  <Text style={styles.body}>Don't have an account? Register Now</Text>    
                 </View> 
             
             
                 <View>
                     <Button style={styles.btn} title="Log In" />
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
         justifyContent: 'center'
     },
     title: {
         fontSize: 48,
         fontWeight: "bold",
         color: '#ffffff'
     },
     body: {
         color: '#949494',
     },
     btn: {
         color: "#d46313",
     }
 
 
   });
 
   export default Login;