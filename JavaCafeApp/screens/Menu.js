/**
  * Menu: The menu screen for the application
  * @authors Teddy Grzywa, Jared Hunt, Mo Auguste
  * @version 1.0.0
  */

import React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, Button, ScrollView, Image } from 'react-native';
import colors from '../constants/colors';
import { useSelector } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import BottomNavigation from '../components/BottomNavigation';




const Menu = props => {
    const products = useSelector(state => state.products.availableProducts)
    const hot = useSelector(state => state.products.hotProducts)
    const cold = useSelector(state => state.products.coldProducts)
    const pastries = useSelector(state => state.products.pastryProducts)
    return (



        <View style={styles.container}>
            <View style={styles.contentcontainer}>
                <View style={styles.filter}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Hot Brew</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cold Brew</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Pastries</Text>
                    </TouchableOpacity>
                </View>

                <FlatList horizontal
                data={products}
                keyExtractor={item => item.id}
                renderItem={itemData => 
                
                <View style={styles.subMenuItem}>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('ProductSelection', {productId: itemData.item.id, productTitle: itemData.item.title})}}>
                        <Image style={styles.image} source={{uri:itemData.item.imageUrl}}></Image>
                        <Text style={styles.text}>{itemData.item.title}</Text>
                    </TouchableOpacity>
                </View>}/>
                <FlatList horizontal
                data={cold}
                keyExtractor={item => item.id}
                renderItem={itemData => 
                <View style={styles.subMenuItem}>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('ProductSelection', {productId: itemData.item.id, productTitle: itemData.item.title})}}>
                        <Image style={styles.image} source={{uri:itemData.item.imageUrl}}></Image>
                        <Text style={styles.text}>{itemData.item.title}</Text>
                    </TouchableOpacity>
                </View>}/>
                <FlatList horizontal
                data={pastries}
                keyExtractor={item => item.id}
                renderItem={itemData => 
                <View style={styles.subMenuItem}>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('ProductSelection', {productId: itemData.item.id, productTitle: itemData.item.title})}}>
                        <Image style={styles.image} source={{uri:itemData.item.imageUrl}}></Image>
                        <Text style={styles.text}>{itemData.item.title}</Text>
                    </TouchableOpacity>
                </View>}/>
            </View>
            
            <View style={styles.navbar}>
                <BottomNavigation navigation={props.navigation}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    contentcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },

    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 40,
    },
    subMenu: {
        width: 320,

    },
    subMenuItem: {
        padding: 15,
    },
    subMenuImg: {
        width: 100,
        height: 100,
    },
    productName: {
        color: colors.text,

    },
    image: {
        width: 100,
        height: 100,

    },
    text: {
        color: colors.text
    },
    button: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        padding: 5
    },
    buttonText: {
        color: colors.text,
        fontSize: 20
    },
    navbar: {
        height: 80
    }

});

export default Menu;