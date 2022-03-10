/**
  * Login: a place where user/employee can log into the Java Cafe App 
  * @authors Teddy Grzywa
  * @version 1.0.0
  */

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView, Image } from 'react-native';
import colors from '../constants/colors';




const Menu = props => {
    return (
        <View style={styles.container}>
            <View style={styles.filter}>
                <Button title='Menu' />
                <Button title='Hot Brews' />
                <Button title='Cold Brews' />
                <Button title='Pastries' />
            </View>

            {/**Cold Drinks */}
            <ScrollView horizontal style={styles.subMenu}  color={colors.assessory} >
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/iced_coffee.jpg')} style={styles.subMenuImg} />
                    <Text style={styles.productName}>Iced Coffee</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/iced_latte.jpg')} style={styles.subMenuImg} />
                    <Text>Iced Latte</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/iced_mocha.jpg')} style={styles.subMenuImg} />
                    <Text>Iced Mocha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/iced_tea.jpg')} style={styles.subMenuImg} />
                    <Text>Iced Tea</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/lemonade.jpg')} style={styles.subMenuImg} />
                    <Text>Lemonade</Text>
                </TouchableOpacity>

            </ScrollView >

            {/**Hot Drinks */}
            <ScrollView horizontal style={styles.subMenu}>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/coffee.jpg')} style={styles.subMenuImg} />
                    <Text>Classic Coffee</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/decaf_coffee.jpg')} style={styles.subMenuImg} />
                    <Text>Decaf Coffee</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/cappucino.jpg')} style={styles.subMenuImg} />
                    <Text>Cappuccino</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/espresso.jpg')} style={styles.subMenuImg} />
                    <Text>Espresso</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/latte.jpg')} style={styles.subMenuImg} />
                    <Text>Latte</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/hot_tea.jpg')} style={styles.subMenuImg} />
                    <Text>Hot Tea</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/hot_chocolate.jpg')} style={styles.subMenuImg} />
                    <Text>Hot Chocolate</Text>
                </TouchableOpacity>
            </ScrollView >

            {/**Pasteries */}
            <ScrollView horizontal style={styles.subMenu}>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/cinn_bun.jpg')} style={styles.subMenuImg} />
                    <Text>Cinnamon Roll</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/macaron.jpg')} style={styles.subMenuImg} />
                    <Text>Macaron</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/scone.jpg')} style={styles.subMenuImg} />
                    <Text>Vanilla Bean Scone</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/eclair.jpg')} style={styles.subMenuImg} />
                    <Text>Éclair</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/sugar_cookie.jpg')} style={styles.subMenuImg} />
                    <Text>Sugar Cookie</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                    <Image source={require('../assets/choco_chip_cookie.jpg')} style={styles.subMenuImg} />
                    <Text>Chocolate Chip Cookie</Text>
                </TouchableOpacity>
            </ScrollView >



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 80,
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
        
    }

});

export default Menu;