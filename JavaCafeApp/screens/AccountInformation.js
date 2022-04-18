/**
 * Login: a place where user/employee can log into the Java Cafe App 
 * @authors Teddy Grzywa, Blake Ardizzone
 * @version 1.0.0
 */

import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

/* Code to be refractored to take user information from the database */
const AccountInfo = props => {
    return(
        <View style={styles.container}>

            <View style={styles.body}>
                <Text style={styles.headerText}>Profile</Text>        
                <Text style={styles.bodyText}>Mike</Text>
            </View>


            <View style={styles.body}>
                <Text style={styles.headerText}>Payment</Text>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Payment')}}>
                <Text style={styles.bodyText}>Manage all payment methods here</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <Text style={styles.headerText}>Device Notifications</Text>
                <Text style={styles.bodyText}>Push {'&'} SMS</Text>   
            </View> 

            <View style={styles.body}>
                <Text style={styles.headerText}>Loyalty Points</Text>
                <Text style={styles.bodyText}>xx.xx</Text>  
            </View>

            <View style={styles.body}>
                <Text style={styles.headerText}>Call Your Selected Store</Text>
                <Text style={styles.bodyText}>(352)555-1004</Text>     
            </View> 

            <View>
                <TouchableOpacity style={styles.touchable} onPress={() => Alert.alert(
                    'Account Deletion',
                    'Warning, this action is permanent. Unredeemed JC Coins will be irrecoverable. Are you sure you would like to delete your Java Cafe account?',
                    [
                    {text: 'Yes', onPress: () => console.log('Yes button clicked')},
                    {text: 'No', onPress: () => console.log('No button clicked'), style: 'cancel'},],{cancelable: true})}>
                        <Text style={styles.warning}>Delete Account</Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
}
AccountInfo.navigationOptions = navData => {
    return {
    headerTitle: 'Account Settings',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} > 
    <Item 
    title='Menu' 
    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} 
    onPress={() => {
        navData.navigation.navigate('Menu');
    }} />
    </HeaderButtons>
    }
    
};
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
warning: {
    color: 'red',
    fontSize: 18
},
touchable: {
    margin: 20,
    marginTop: 40,

}
});

export default AccountInfo;
