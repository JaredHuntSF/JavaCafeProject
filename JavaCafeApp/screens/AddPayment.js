
/**
  * Payment: Lists Customer's payment options
  * @authors Teddy Grzywa
  * @version 1.0.0
  */

 import React, {useState} from 'react';
 import { Ionicons } from '@expo/vector-icons';
 import { View, Text, Button, StyleSheet,
    TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, Alert} from 'react-native';
 import colors from '../constants/colors';



 const AddPayment = props => {

    const [cardNum, setCardNum] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cvv, setCVV] = useState('');
    const [zip, setZip] = useState('');

  
   
    //Upon an alret trigger from faulty input, all inputs will be reset
    function resetInputHandler(){
        setCardNum('   xxxxxxxxxxxxxxx');
        setMonth('MM');
        setYear('YY');
        setCVV('CVV');
        setZip('Zip Code/Postal Code');
    }

   function cardNumHandler(cardNum) {
       setCardNum(cardNum);
   }

   function submitCardInputHandler () {
       const cardNumInput = parseInt(cardNum);

       if(isNaN(cardNumInput) ) {
           Alert.alert('Invalid Input', 'Card information is misentered please try again.',
           [{text:'Okay', style: 'destructive', onPress: resetInputHandler}]
           );
           return;
        }
    }

    function monthHandler(month) {
        setMonth(month);
    }
 
    function submitMonthInputHandler () {
        const monthInput = parseInt(month);
 
        if(isNaN(monthInput) || monthInput < 1 || monthInput > 12) {
            Alert.alert('Invalid Input', 'Card information is misentered please try again.',
            [{text:'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
         }
    }
     
     
    function yearHandler(year) {
        setYear(year);
    }
 
    function submitYearInputHandler () {
        const yearInput = parseInt(year);
 
        if(isNaN(yearInput) || yearInput < 1950 || yearInput > 2030) {
            Alert.alert('Invalid Input', 'Card information is misentered please try again.',
            [{text:'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
         }
    }

    function cvvHandler(cvv) {
        setCVV(cvv);
    }
 
    function submitCVVInputHandler () {
        const cvvInput = parseInt(cvv);
 
        if(isNaN(cvvInput) ) {
            Alert.alert('Invalid Input', 'Card information is misentered please try again.',
            [{text:'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
         }
    }

    function zipHandler(zip) {
        setZip(zip);
    }
 
    function submitZipInputHandler () {
        const zipInput = parseInt(zip);
 
        if(isNaN(zipInput) ) {
            Alert.alert('Invalid Input', 'Card information is misentered please try again.',
            [{text:'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
         }
    }
   

   



     return (

        <View style={styles.container}>
        
        <Text style={styles.header}>Add Payment</Text>
        
        <View style={styles.body}>
            
            <Text style={styles.bodyText}>
                <Ionicons name='wallet' size={20} color='#FF850F'/>
                Credit Card Number</Text>
            
                <TextInput
                placeholder="   xxxxxxxxxxxxxxx"
                placeholderTextColor={'#C0C9D1'}
                style={styles.inputText}
                keyboardType="numeric"
                onChangeText={cardNumHandler}
                value={cardNum}
                />

            <View style={styles.inputArea}>
                    <TextInput 
                    style={styles.inputText}
                    placeholder="MM"
                    placeholderTextColor={'#C0C9D1'}
                    keyboardType="numeric"
                    maxLength={2}
                    onChangeText={monthHandler}
                    value={month}
                    />

                    <TextInput 
                    style={styles.inputText}
                    placeholder="YY"
                    placeholderTextColor={'#C0C9D1'}
                    keyboardType="numeric"
                    maxLength={2}
                    onChangeText={yearHandler}
                    value={year}
                    />

                    <TextInput
                    style={styles.inputText} 
                    placeholder="CVV"
                    placeholderTextColor={'#C0C9D1'}
                    keyboardType="numeric"
                    maxLength={3}
                    onChangeText={cvvHandler}
                    value={cvv}
                    />            
            </View>
            
                <View style={styles.inputText}>
                    <TextInput
                    placeholder="Zip Code/Postal Code"
                    placeholderTextColor={'#C0C9D1'}
                    style={styles.inputText}
                    keyboardType="numeric"
                    maxLength={5}
                    onChangeText={zipHandler}
                    value={zip} 
                    />
                </View>

                <View>
                    <Button
                    title='Add Credit Card'
                    style={styles.button}
                    color={'#FF850F'}
                    onPress={() => {
                        props.navigation.navigate({ routeName: 'Payment' })
                    }}/> 
                </View>
            
            </View>
        
        </View>
     );
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: colors.primary,
        alignItems: 'center',
    },
    header: {
        margin: 15,
        padding: 30,
        fontSize: 36,
        color: colors.text,
        fontWeight: "bold",
    },
    body: {
     margin: 4,
     padding: 15,
     flexDirection: 'column',
     justifyContent: 'flex-start',
     
    },
    bodyText: {
        fontSize: 14,
        flexDirection: 'column',
        padding: 5,
        color: colors.header
    },
    inputArea: { 
        color: colors.header,
        marginRight: 10,
        padding: 10,
        fontSize: 14,
        flexDirection: 'row',
        textAlign: 'center'  
    },
    inputText: { 
        color: colors.header,
        marginRight: 10,
        padding: 10,
        fontSize: 14,
        flexDirection: 'row', 
        borderBottomColor: '#C1C1C1',
        borderBottomWidth: 1,
        borderRadius: 1   
    },
    button: {
        padding: 30,
        width: 90,
        alignSelf: 'center',
        marginTop: 25
    },
    
    errorMessageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    errorMessage: {
        color: colors.assessory, 
    }
});


 export default AddPayment;