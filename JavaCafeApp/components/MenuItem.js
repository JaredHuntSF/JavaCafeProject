import React from 'react';
import {
View,
Text,
StyleSheet,
TouchableOpacity,
Platform,
Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const MenuItem = props => {
return (
<View>
    <TouchableOpacity style={styles.subMenuItem}>
        <Image style={styles.subMenuImg} source={require('../assets/iced_coffee.jpg')} />
        <Text style={styles.text}  >Iced Coffee</Text> 
    </TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
menuItem: {
    
    },
subMenuImg: {
        width: 100,
        height: 100,
    },
text: {
        color: colors.text
    }

});

export default MenuItem;