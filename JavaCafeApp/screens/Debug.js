/**
 * Debug screen to access pages
 */

import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

/* Code to be refractored to take user information from the database */
const Debug = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={() => { props.navigation.navigate('Login') }}>
                <Text style={styles.warning}>Login Page</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={() => { props.navigation.navigate('EmployeeProductScreen') }}>
                <Text style={styles.warning}>Employee Product Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={() => { props.navigation.navigate('PastOrders') }}>
                <Text style={styles.warning}>Past Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={() => { props.navigation.navigate('AccountRegistration') }}>
                <Text style={styles.warning}>Account Registration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={() => { props.navigation.navigate('AddProduct') }}>
                <Text style={styles.warning}>Add Product</Text>
            </TouchableOpacity>
        </View>
    );
}
Debug.navigationOptions = navData => {
    return {
        headerTitle: 'Debug Page',
    }

};
const styles = StyleSheet.create({
    container: {
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
        color: colors.assessory,
        fontSize: 18
    },
    touchable: {
        margin: 20,
        marginTop: 40,

    }
});

export default Debug;
