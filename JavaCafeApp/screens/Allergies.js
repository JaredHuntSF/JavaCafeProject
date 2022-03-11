/**
* Allergies Toggle Page
* @authors Jared Hunt
* @version 1.0.0
*/

import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Colors from '../constants/colors';
 
 
const Allergies = props => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={styles.container}>
 
            <View style={styles.body}>
                <Text style={styles.text} >Do you have allergies?</Text>        
                <Switch 
                trackColor={{ false: "#767577", true: Colors.assessory }}
                thumbColor={isEnabled ? Colors.text : Colors.header}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} 
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.text} >Milk</Text>        
                <Switch 
                trackColor={{ false: "#767577", true: Colors.assessory }}
                thumbColor={isEnabled ? Colors.text : Colors.header}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} 
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.text} >Eggs</Text>        
                <Switch 
                trackColor={{ false: "#767577", true: Colors.assessory }}
                thumbColor={isEnabled ? Colors.text : Colors.header}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} 
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.text} >Peanuts</Text>        
                <Switch 
                trackColor={{ false: "#767577", true: Colors.assessory }}
                thumbColor={isEnabled ? Colors.text : Colors.header}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} 
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.text} >Soy</Text>        
                <Switch 
                trackColor={{ false: "#767577", true: Colors.assessory }}
                thumbColor={isEnabled ? Colors.text : Colors.header}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} 
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.text} >Wheat</Text>        
                <Switch 
                trackColor={{ false: "#767577", true: Colors.assessory }}
                thumbColor={isEnabled ? Colors.text : Colors.header}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} 
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.text} >Tree Nuts</Text>        
                <Switch 
                trackColor={{ false: "#767577", true: Colors.assessory }}
                thumbColor={isEnabled ? Colors.text : Colors.header}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} 
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.text} >Fish</Text>        
                <Switch 
                trackColor={{ false: "#767577", true: Colors.assessory }}
                thumbColor={isEnabled ? Colors.text : Colors.header}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} 
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.text} >Shellfish</Text>        
                <Switch 
                trackColor={{ false: "#767577", true: Colors.assessory }}
                thumbColor={isEnabled ? Colors.text : Colors.header}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} 
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.text} >Sesame</Text>        
                <Switch style={styles.text}
                trackColor={{ false: "#767577", true: Colors.assessory }}
                thumbColor={isEnabled ? Colors.text : Colors.header}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} 
                />
            </View>
 
        </View>
        );
    }

    const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: Colors.primary,
        paddingLeft: 20,
        paddingTop: 20
        
        },
    text: {
        color: Colors.text,
    }
    
    });

export default Allergies;
 