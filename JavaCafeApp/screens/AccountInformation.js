/**
 * Login: a place where user/employee can log into the Java Cafe App 
 * @authors Teddy Grzywa
 * @version 1.0.0
 */

 import React from 'react';
 import { StyleSheet, Text, View, } from 'react-native';
 
 
 const AccountInfo = props => {
     return(
         <View style={styles.container}>
 
             <View style={styles.body}>
                 <Text>Profile</Text>        
                 <Text>Mike</Text>
             </View>
 
 
             <View>
                 <Text>Payment</Text>
                 <Text>Manage all payment methods here</Text>
             </View>
 
             <View>
                 <Text>Device Notifications</Text>
                 <Text>Push and SMS</Text>   
             </View> 
 
             <View>
                 <Text>Loyalty Points</Text>
                 <Text>xx.xx</Text>  
             </View>
 
             <View>
                 <Text>Call Your Selected Store</Text>
                 <Text>(352)555-1004</Text>     
             </View> 
         </View>
     );
 }
 
 const styles = StyleSheet.create({container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
     
 }
 });
 
 export default AccountInfo;
 