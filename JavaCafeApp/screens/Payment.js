
/**
  * Payment: Lists Customer's payment options
  * @authors Teddy Grzywa
  * @version 1.0.0
  */

 import React from 'react';
 import { StyleSheet, Text, View, } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';
 import colors from '../constants/colors';
 
 const Payment = props => {
     return (
         <View style={styles.container}>
             
             <Text style={styles.header}>Saved Payment Methods</Text>
             
             <View style={styles.body}>
                  <Text style={styles.headerText}>Visa xxxx</Text>        
                  <Text style={styles.bodyText}>
                     <Ionicons name='wallet' size={20} color='#FF850F'/>
                      Exp. xx/xxxx</Text>
              </View>
 
              <View style={styles.body}>
                  <Text style={styles.headerText}>MasterCard xxxx</Text>
                  <Text style={styles.bodyText}>
                     <Ionicons name='wallet' size={20} color='#FF850F'/>
                      Exp. xx/xxxx</Text>
              </View>
  
              <View style={styles.section}>
                  <Text style={styles.headerText}>
                      <Ionicons name='wallet' size={20} color='#FF850F'/>
                      Google Pay</Text>
                  <Text style={styles.headerText}>
                     <Ionicons name='wallet' size={20} color='#FF850F'/>
                     Apple Pay</Text>  
              </View>
  
              <View style={styles.body}>
                  <Text style={styles.titleText}>Add Payment</Text>
                  <Text style={styles.headerText}>
                     <Ionicons name='wallet' size={20} color='#FF850F'/>
                     Credit Card 
                     <Ionicons name='arrow-redo' size={30} color='#FF850F'
                     onPress={() => {
                         props.navigation.navigate({ routeName: 'AddPayment' })
                     }}/>
                     </Text>
 
                  <Text style={styles.headerText}>
                     <Ionicons name='wallet' size={20} color='#FF850F'/>
                     PayPal
                     </Text>     
              </View>
         </View>
     );
 }
 
 const styles = StyleSheet.create({
     
     container: {
         flex: 1,
         width: '100%',
         height: '100%',
         backgroundColor: colors.primary
     },
     header: {
         margin: 15,
         padding: 30,
         fontSize: 36,
         color: colors.text,
         fontWeight: "bold",
     },
     body: {
      margin: 4,
      padding: 15,
      width: '90%',
      flexDirection: 'column',
      //alignItems: 'center',
      justifyContent: 'flex-start',
      borderBottomColor: '#C1C1C1',
      borderBottomWidth: 1,
      borderRadius: 1,
     },
     section: {
         margin: 3,
         padding: 10,
     },
     titleText: { 
         fontSize: 16,
         color: colors.text,
         fontWeight: "bold"
     },
     headerText: {
         fontSize: 16,
         padding: 5,
         color: colors.header
     },
     bodyText: {
         fontSize: 14,
         flexDirection: 'column',
         padding: 5,
         color: colors.header,
         
     }
 });
  export default Payment;