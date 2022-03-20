/**
 * AccountCreated: Page where the user will be informed that their account has been created
 * @authors Jared Hunt
 * @version 1.0.0
 */

 import React from 'react';
 import { HeaderButtons, Item } from 'react-navigation-header-buttons';
 import HeaderButton from '../components/HeaderButton';
 import { StyleSheet, Text, View, } from 'react-native';
 import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
 import { Ionicons } from '@expo/vector-icons';
 import colors from '../constants/colors';
 

 const AccountCreated = props => {
     return(
        <View style={styles.container}>
 
            <View style={styles.body}>
                <Text style={styles.headerText}>Account has now been registered. Please press below to return to the login screen.</Text>
                <Ionicons style={styles.menuIcon} name='home' onPress={() => {
                props.navigation.navigate({ routeName: 'Login' })}}>
                </Ionicons>      
            </View>
 
 
        </View>
    );
}
AccountCreated.navigationOptions = navData => {
    return {
    headerTitle: '',
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
    alignItems: 'center',
    justifyContent: 'center',
},
headerText: {
    fontSize: 44,
    color: 'white',
    padding: 5,
},
bodyText: {
    fontSize: 14,
    color: 'white',
    flexDirection: 'column',
    padding: 5,
},
menuIcon: {
    color: colors.text,
    fontSize: 200
},
});

export default AccountCreated;
