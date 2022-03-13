/**
 * Store Selection: The customer can select the store location on this screen
 * @authors Blake Ardizzone
 * @version 1.0.0
 */

import React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import BottomNavigation from '../components/BottomNavigation';

const StoreSelection = props => {
return (
<View style={styles.screen}>
    <Text style={styles.text}>
            Select your store:
    </Text>
        <View style={styles.block}>
            <TouchableOpacity>
            <Text style={styles.stores}>
                1234 Museum Rd{"\n"}
                0.2 Miles - Open Now - 4PM
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.stores}>
                1234 SW Archer{"\n"}
                0.4 Miles - Open Now - 4PM
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.stores}>
                1234 SW Celebration Point{"\n"}
                1.5 Miles - Open Now - 4PM
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.stores}>
                1234 SW Newberry Rd{"\n"}
                3.2 Miles - Open Now - 4PM
            </Text>
        </TouchableOpacity>
        </View>
    <BottomNavigation style={styles.bottomBar} /> 
</View>
)
}

StoreSelection.navigationOptions = navData => {
    return {
    headerTitle: 'Store Selection',
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

// const clickableIcon {
    
// }

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    block: {
        backgroundColor: '#5F5C61',
        padding: 10,
        margin: 30,
    },
    text: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 20,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 0,
        margin: 20,
    },
    stores: {
        color: 'white',
        margin: 5,
        padding: 16,
        fontSize: 16,
    }
    });
export default StoreSelection;

