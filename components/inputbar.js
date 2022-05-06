import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { inOut } from 'react-native/Libraries/Animated/Easing';

//input bar function that will be rendered in App.js
const InputBar = props => {
    return (
        <View style={StyleSheet.inputContainer}>
            <TextInput style={StyleSheet.input} onChangeText={logBookInput => props.textChange(logBookInput)} value={props.logBookInput} />
            <TouchableOpacity style={styles.addButton} onPress={props.addNewLog}><Text style={styles.addButtonText}>ADD</Text></TouchableOpacity>
        </View>
    )
}

//Stylesheet specifications
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: .1
    },
    input: {
        backgroundColor: '#f3f3f3',
        flex: 1,
        fontSize: 18,
        height: 35
    },
    addButton: {
        width: 100,
        backgroundColor: '#ffce00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        color: '#171717',
        fontSize: 18,
        fontWeight: '700'
    }
})

//exports the InputBar fuction
export default InputBar;

