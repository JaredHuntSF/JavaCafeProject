/**
 * Tip: The customer can select the tip amount for their order
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
            Would you like to tip for your service?
    </Text>
        <View style={styles.block}>
            <TouchableOpacity>
            <Text style={styles.tip}>
                15%
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.tip}>
                18%
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.tip}>
                20%
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.tip}>
                Custom
            </Text>
            </TouchableOpacity>
        </View>
            <Text style={styles.tip}>
                Subtotal: XX.XX
            </Text>
            <Text style={styles.tip}>
                Tip: XX.XX
            </Text>
    <BottomNavigation navigation={props.navigation} /> 
</View>
)
}

StoreSelection.navigationOptions = navData => {
    return {
    headerTitle: 'Tip',
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
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        fontWeight: "bold",
    },
    tip: {
        color: 'white',
        fontWeight: "bold",
    },
    stores: {
        color: 'white',
        margin: 5,
        padding: 16,
        fontSize: 16,
    }
    });
export default StoreSelection;
