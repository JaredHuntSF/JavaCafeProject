/**
  * Payment: Lists Customer's payment options
  * @authors Teddy Grzywa
  * @version 1.0.0
  */

 import React from 'react';
 import { StyleSheet, Text, View, } from 'react-native';
 import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
 import colors from '../constants/colors';
 
 /**I know we can't truely add payment so I wonder how this will connect to the database*/
 const AccountInfo = props => {
     return(
         <View style={styles.container}>
             
             <Text style={styles.header}>Saved Payment Methods</Text>
 
             <View style={styles.body}>
                 <icon-icon name="wallet" style={styles.icon}></icon-icon>
                 <Text style={styles.headerText}>Visa xxxx</Text>        
                 <Text style={styles.bodyText}>Exp. xx/xxxx</Text>
             </View>
 
 
             <View style={styles.body}>
                <icon-icon name="wallet" style={styles.icon}></icon-icon>
                 <Text style={styles.headerText}>MasterCard xxxx</Text>
                 <Text style={styles.bodyText}>Exp. xx/xxxx</Text>
             </View>
 
             <View style={styles.body}>
                <icon-icon name="wallet" style={styles.icon}></icon-icon>
                 <Text style={styles.headerText}>Google Pay</Text>
                 <icon-icon name="wallet" style={styles.icon}></icon-icon>
                 <Text style={styles.headerText}>Apple Pay</Text>  
             </View>
 
             <View style={styles.body}>
                 <Text style={styles.titelText}>Add Payment</Text>
                 <icon-icon name="wallet" style={styles.icon}></icon-icon>
                 <Text style={styles.headerText}>Credit Card</Text>
                 <icon-icon name="add" style={styles.icon}></icon-icon>
            </View>
            <View> 
                 <icon-icon name="wallet" style={styles.icon}></icon-icon>
                 <Text style={styles.headerText}>PayPal</Text>
                 <icon-icon name="add" style={styles.icon}></icon-icon>     
             </View> 
         </View>
     );
 }
 
 const styles = StyleSheet.create({container: {
     flex: 1,
     width: '100%',
     height: '100%',
     backgroundColor: 'black',
 },
 body: {
     margin: 4,
     padding: 15,
     flexDirection: 'column',
     //alignItems: 'center',
     justifyContent: 'flex-start',
     borderBottomColor: '#C1C1C1',
     borderBottomWidth: 1,
     borderRadius: 1,
 },
 title: {
     marginVertical: 10,
     fontSize: 30,
     color: colors.text,
 },
 titelText: { 
     fontSize: 20,
     color: colors.text,
 },
 headerText: {
     fontSize: 16,
     color: 'white',
     padding: 5,
 },
 bodyText: {
     fontSize: 14,
     color: 'white',
     flexDirection: 'column',
     padding: 5,
 },
 icon: {
     flexDirection: 'row',
     color: colors.text,
     backgroundColor: colors.assessory,

 }
 });
 
 export default Payment;