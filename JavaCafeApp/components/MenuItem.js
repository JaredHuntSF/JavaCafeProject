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
<View style={styles.container}>
    
<View style={styles.contentContainer}>
                
                <View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.filteredImage} source={{uri: props.image}}/>
                    </View>
                    <View style={styles.details} >
                        <Text style={styles.text} > {props.title}</Text>
                        <Text style={styles.text} >${props.price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.actions}>
                        {props.children}
                    </View>
                </View>

                </View>
    
    
    
    {/* <TouchableOpacity style={styles.subMenuItem}>
        <Image style={styles.subMenuImg} source={require('../assets/iced_coffee.jpg')} />
        <Text style={styles.text}  >Iced Coffee</Text> 
    </TouchableOpacity> */}
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
    },
filteredImage: {
        width: 275,
        height: 275,
    },
container: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    

});

export default MenuItem;