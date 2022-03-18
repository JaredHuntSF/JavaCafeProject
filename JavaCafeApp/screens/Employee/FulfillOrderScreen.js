/**
 * Fulfill Order Screen
 * @authors Mo Auguste
 * @date    2022-03-17 23:23:48
 * @version 1.0.0
 */

import React from 'react';
import { View, Text, Button, FlatList, ScrollView, StyleSheet } from 'react-native';

import Card from '../../components/Card';
import colors from '../../constants/colors';
import size from '../../constants/size';

const FulfillOrderScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                {/*REFACTOR: Take Input from Orders Screen */}
                <Text style={styles.headerText}>Order# 57</Text>
            </View>
            <ScrollView>
                <Card style={styles.orderItem}>
                    <Text style={styles.orderItemText}>Large Coffee</Text>
                    <Text style={styles.orderItemText}>QTY: 1</Text>
                </Card>
                <Text style={styles.subheaderText}>Ready?</Text>
                <Button style={styles.button} title='Notify Customer' />
                <Text style={styles.subheaderText}>Ready?</Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title='5 MIN' />
                    <Button style={styles.button} title='10 MIN' />
                    <Button style={styles.button} title='15 MIN' />
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.primary,
        flex: 1,
        padding: 10
    },
    header: {
        alignItems: 'center',
        marginVertical: 20
    },
    headerText: {
        color: colors.text,
        fontSize: size.headingFontSize
    },
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subheaderText: {
        color: colors.text,
        fontSize: size.subheaderText,
        fontWeight: 'bold',
        marginTop: 50
    },
    button: {
        color: colors.secondary,
        width: '40%'
    }
});

export default FulfillOrderScreen;
