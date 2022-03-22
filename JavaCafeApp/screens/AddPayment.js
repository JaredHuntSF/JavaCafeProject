/**
 * AddPayment: Takes customer's input about their credit card information
 * @authors Teddy Grzywa
 * @version 1.0.0
 */

 import React, { useState, useEffect } from 'react';
 import { View, Text, Button, StyleSheet,
         TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, Alert} from 'react-native';
 import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
 
 import colors from '../constants/colors';
 import size from '../constants/size';


const AddPayment = props => {

    
    return(
        <View style={styles.screen}>
            <Text style={styles.header}>Saved Credit Cards</Text>
            <View style={style.body}>
                <icon-icon name="wallet" style={styles.icon}></icon-icon>
                <Text>Credit Card Number</Text>
                <TextInput
                placeholder="xxxxxxxxxxxxxxx"
                style={styles.input}
                keyboardType="numberic"
                />
            </View>

            <View style={styles.body}>
                <TextInput 
                    placeholder="MM"
                    style={style.input}
                    keyboardType="numeric"
                    maxLength={2}
                />
                <TextInput 
                    placeholder="YY"
                    style={style.input}
                    keyboardType="numeric"
                    maxLength={2}
                    value={year}
                />
                <TextInput 
                    placeholder="CVV"
                    style={style.input}
                    keyboardType="numeric"
                    maxLength={3}
                />            
            </View>
            <View>
                <TextInput
                placeholder="CVV"
                style={style.input}
                keyboardType="numeric"
                maxLength={5}
                />
            </View>

                <Button 
                title='Add Credit Card'
                onPress={() => {
                    props.navigation.navigate({ routeName: 'Payment' })
                }}/>            
            
        </View>
    )
}

 const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    header: {
        marginVertical: 10,
        fontSize: 30,
        color: colors.text,
    },
    body: {
        marginTop: 25
    },
    subHeader: {
        fontSize: 22,
        color: colors.header
    },
    input: {
        color: colors.text,
        marginVertical: 3,
        fontSize: size.paragraphFontSize,
        height: 50,
        borderBottomColor: colors.secondary,
        width: 300,
        borderWidth: 1,
        backgroundColor: colors.primary,
        marginBottom: 10
    },
    button: {
        width: 80,
        color: colors.assessory,
        alignSelf: 'center',
        marginTop: 25
    },
    icon: {
        flexDirection: 'row',
        color: colors.text,
        backgroundColor: colors.assessory,
   
    }
});

export default AddPayment;
